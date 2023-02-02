import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import Informationsdesigners from "../components/Informationsdesigners";
import Contact from "../components/Contact";
import axios from "axios";
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
function Project() {
  const output = useParams();
  const api_url = "/api/projects/get/" + output.prjId;
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setdark());

    const getProject = async () => {
      setLoading(true);
      const resp = await axios
        .get(api_url)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      setProject(resp[0]);
      setLoading(false);
    };
    getProject();
  }, []);

  if (project && !loading) {
    return (
      <div className="fill ">
        <div
          className="projecthomesection"
          style={{ backgroundImage: `url(${project.imgs[0].path_url})` }}
        >
          <span className="text1">
            This page pops when you press a project, it allows you to check
            content of different projects the background needs to be replaced
            dynamically from database
          </span>
        </div>
        <section className="project_title_section">
          <div className="row">
            <h1 className="section_title col">{project.title}</h1>
            <div className="col tlines">{tlines}</div>
          </div>
        </section>
        <img
          src={project.imgs[1].path_url}
          className="d-flex projectImg_1 center"
        ></img>
        <div
          className="container MainRec1"
          style={{
            background:
              "linear-gradient(180deg," +
              project.hex1 +
              " 0%, " +
              project.hex2 +
              " 98.96%)",
          }}
        >
          <div className="text2 row">Project description</div>
          <div className="row marge">
            <div className="text3 col">{project.parag1}</div>
            <div className="text4 col">{project.parag2}</div>
          </div>
        </div>
        {project.imgs.map((img, i) => {
          if (i > 1)
            return (
              <img
                src={img.path_url}
                className="d-flex projectImg_2 center"
              ></img>
            );
        })}
        <div className="container MainRec2">
          <div className="text2 row">About the designer</div>
          <div className="aboutdesigner d-flex">
            <a>
              <i className="bi bi-facebook"></i>
            </a>
            <a>
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/m_s_lyafi/">
              <i className="bi bi-instagram"></i>
            </a>
            <a>
              <i className="bi bi-twitch"></i>
            </a>
          </div>
        </div>
        <footer className="App-footer d-flex mb-3 justify-content-between">
          <Informationsdesigners />
          <Contact />
        </footer>
      </div>
    );
  } else {
    return <div>Still loading</div>;
  }
}

export default Project;
