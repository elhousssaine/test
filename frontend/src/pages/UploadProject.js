import React from "react";
import { useForm } from "react-hook-form";
import { useState,useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./UploadProject.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";


const tlines = (
  <svg
    width="145"
    height="146"
    viewBox="0 0 145 146"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M145 116.693V145.078H0V116.693H145Z" fill="white" />
    <path d="M145 56.7695V88.3082H0V56.7695H145Z" fill="white" />
    <path d="M145 0V28.3848H0V0H145Z" fill="white" />
  </svg>
);

const UploadProject = () => {
  const { register, handleSubmit, reset } = useForm();
  const [images, setImages] = useState([]);
  const { userInfo, error } = useSelector((state) => state.auth);
  const err = useSelector((state) => state.err);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setError] = useState({});
  const onChangeImgs = (e) => {
    e.preventDefault();
    let tempArr = [];
    for (let i = 0; i < e.target.files.length; i++) {
      tempArr.push(e.target.files[i]);
    }
    setImages(images.concat(tempArr));
  };
  const OnClearAll = () => {
    setImages([]);
    setError({});
    reset();
  };
  useEffect(() => {
    dispatch(setdark());
  }, []);
  const submitForm = (data) => {
    const form = new FormData();
    Object.keys(data).map((key, index) => {
      form.append(key, data[key]);
    });
    //get owner from redux store
    form.append("owner", userInfo.id);
    for (let i = 0; i < images.length; i++) {
      form.append("images", images[i]);
    }

    axios
      .post("/api/projects/add", form)
      .then((res) => {
        if (res.status == 200) {
          navigate("/admin");
        }
      })
      .catch((e) => {
        setError(e.response.data);
        console.log(e.response.data);
      });
  };

  return (
    <div className="upload_project_section">
      {!errors && (
        <div className="alert">
          <span
            className="closebtn"
            onclick={() => {
              setError({});
            }}
          >
            &times;
          </span>
          <strong>Failed! </strong> {errors}
        </div>
      )}
      <div className="row ">
        <h1 className="section_title col">
          PROJECT
          <br />
          DASH
        </h1>
        <div className="col tlines">{tlines}</div>
      </div>
      <form
        noValidate
        onSubmit={handleSubmit(submitForm)}
        encType="multipart/form-data"
      >
        <div className="row">
          <div
            className="upload_project_input col d-flex flex-column"
            id="title_div"
          >
            <label htmlFor="title">PROJECT TITLE</label>
            <input
              type="text"
              placeholder="name"
              {...register("title")}
              required
              id="title"
            />
          </div>
          <div
            className="upload_project_input col d-flex flex-column"
            id="type_div"
          >
            <label htmlFor="type">CARD TYPE</label>
            <select
              placeholder="type"
              name="type"
              className="type"
              id="type"
              {...register("cardType", {
                valueAsNumber: true,
              })}
            >
              <option value="0" defaultValue selected disabled>
                type
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div
            className="upload_project_input col d-flex justify-content-center align-items-center"
            id="imgs_div"
          >
            <label className="flex-grow-1" htmlFor="images">
              IMAGES
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              placeholder="import"
              {...register("images")}
              onChange={onChangeImgs}
            />
          </div>
          <div
            className="upload_project_input col d-flex justify-content-center align-items-center"
            id="gradient_div"
          >
            <label className="flex-grow-1" htmlFor="hexs">
              GRADIENT
            </label>
            <div className="hexs">
              <input
                type="color"
                defaultValue="#7B61FF"
                id="hex1"
                {...register("hex1")}
              />
              <input
                type="color"
                defaultValue="#47FF4D"
                id="hex2"
                {...register("hex2")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="upload_project_input col d-flex flex-column"
            id="parag1_div"
          >
            <label htmlFor="parag1">PARAGRAPH 1</label>
            <textarea
              type="text"
              placeholder="Type your description here"
              required
              id="parag1"
              className="parag1"
              {...register("parag1")}
            />
          </div>
          <div
            className="upload_project_input col d-flex flex-column"
            id="parag2_div"
          >
            <label htmlFor="parag2">PARAGRAPH 2</label>
            <textarea
              type="text"
              placeholder="Type your description here"
              id="parag2"
              className="parag2"
              {...register("parag2")}
            />
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn me-md-2" onClick={OnClearAll}>
            Clear All
          </button>
          <button type="submit" className="btn btn-success">
            Upload Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadProject;
