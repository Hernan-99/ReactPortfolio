import "./App.css";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userData, setUserData] = useState({
    fullname: "",
    profession: "",
    img: "",
    description: "",
    cv: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/profile")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((el) => {
          setUserData({
            fullname: el.fullname_profile,
            profession: el.profession_profile,
            img: el.img_profile,
            description: el.description_profile,
            cv: el.cv_profile,
          });
        });
      });
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        // <div className="d-flex justify-content-center align-items-center">
        <h1 className="text-center">Loading...</h1>
      ) : (
        // </div>
        <>
          <Hero name={userData.fullname} profession={userData.profession} />
          <About description={userData.description} cv={userData.cv} />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );

  // return (
  //   <>
  //     <Hero />
  //     <About />
  //     <Projects />
  //     <Contact />
  //     <Footer />
  //   </>
  // );
}

export default App;
