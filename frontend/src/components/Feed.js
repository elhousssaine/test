import React from "react";
import ContentRec from "./ContentRec";
import axios from "axios";
import { useEffect, useState } from "react";

function Feed(props) {
  const n = props.number;
  //const Url = "http://localhost:5000";

  const [loading, setLoading] = useState(true);
  const [homeProjects, setHomeProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await axios
        .get("/api/projects/getall/-1")
        .then((resp) => {
          return resp.data;
        })
        .catch((e) => console.log(e));
      setHomeProjects(resp);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (homeProjects.length > 0 || !loading) {
    return (
      <div>
        {homeProjects.map((project, i) => {
          const isImg = project.imgs.length > 0 ? true : false;
          const isClickImg = project.imgs.length >= 2 ? true : false;
          return (
            <ContentRec
              prjId={project._id}
              title={project.title}
              hex1={project.hex1}
              hex2={project.hex2}
              isImg={isImg}
              imgUrl={isImg ? project.imgs[0].path_url : ""}
              parag1={project.parag1}
              parag2={project.parag2 ? project.parag2 : ""}
              type={project.cardType}
              isClickImg={isClickImg}
            />
          );
        })}
      </div>
    );
  } else {
    return <div>Still loading</div>;
  }
}

export default Feed;
