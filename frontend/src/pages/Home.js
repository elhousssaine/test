import "./Home.css";
import Contact from "../components/Contact";
import Feed from "../components/Feed";
import Informations from "../components/Informations";
import MainRec from "../components/MainRec";
import "../components/Navbar";
import News from "../components/News";
import Parteners from "../components/Parteners";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import { useEffect } from "react";

function Home() {
  //const HOME_PROJECT_NUMBER = 4;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setlight());
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <MainRec />
        <Feed number="5" />
        <News />
        <FAQ />
        <Blackbords />
        <Parteners />
      </div>
      <footer
        className="App-footer d-flex mb-3 justify-content-between flex-wrap"
        id="footer_section_id"
      >
        <Informations />
        <Contact />
      </footer>
    </div>
  );
}

export default Home;
