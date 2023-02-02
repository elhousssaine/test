import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./UploadProject.css";
import { NavLink } from "react-router-dom";
import "./Register.css";
import { registerUser } from "../actions/authActions";
import { useLocation, useNavigate } from "react-router-dom";

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

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { loading, userInfo, error, success, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const err = useSelector((state) => state.err);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const OnClearAll = () => {
    reset();
  };
  const redirectPath = location.state?.path || "/";

  useEffect(() => {
    if (success) navigate("/");
  }, [navigate, userInfo, success]);
  const submitForm = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <div className="add_designer_section">
      <div className="row ">
        <h1 className="section_title col">
          Admin
          <br />
          DASH
        </h1>
        <div className="col tlines">{tlines}</div>
      </div>
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <div className="row">
          <div
            className="add_designer_input left_side_form col d-flex flex-column"
            id="name_add"
          >
            <label htmlFor="name">FULL NAME</label>
            <input
              type="text"
              placeholder="name"
              {...register("name")}
              required
              id="name"
            />
            {err.name && <span style={{ color: "red" }}>{err.name}</span>}
          </div>
          <div
            className="add_designer_input right_side_form col d-flex flex-column"
            id="insta_add"
          >
            <label htmlFor="insta">INSTAGRAM ACCOUNT</label>
            <input
              type="text"
              placeholder="name"
              {...register("instagramAccount")}
              required
              id="insta"
            />
          </div>
        </div>
        <div className="row">
          <div
            className="add_designer_input left_side_form col d-flex flex-column"
            id="email_add"
          >
            <label className="flex-grow-1" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              multiple
              placeholder="email"
              {...register("email")}
            />
            {err.email && <span style={{ color: "red" }}>{err.email}</span>}
          </div>
          <div
            className="add_designer_input right_side_form col d-flex flex-column"
            id="site_add"
          >
            <label htmlFor="site">WEBSITE</label>
            <input
              type="text"
              placeholder="type"
              {...register("website")}
              required
              id="site"
            />
          </div>
        </div>

        <div className="row">
          <div
            className="add_designer_input left_side_form col d-flex flex-column"
            id="pass_add"
          >
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              placeholder="type"
              {...register("password")}
              required
              id="password"
            />
            {err.password && (
              <span style={{ color: "red" }}>{err.password}</span>
            )}
          </div>
          <div
            className="add_designer_input right_side_form col d-flex flex-column"
            id="pass2_add"
          >
            <label htmlFor="password2">CONFIRM PASSWORD</label>
            <input
              type="password"
              placeholder="type"
              {...register("password2")}
              required
              id="password2"
            />
            {err.password2 && (
              <span style={{ color: "red" }}>{err.password2}</span>
            )}
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn me-md-2 btn_clr"
            onClick={OnClearAll}
            disabled={loading}
            type="button"
          >
            Clear All
          </button>
          <button type="submit" className="bg-success">
            Add Designer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
