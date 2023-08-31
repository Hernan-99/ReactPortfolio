import "../assets/styles/About.css";
import img from "../assets/img/img.jpg";
import { motion } from "framer-motion";
export const About = (props) => {
  const fadeScrollImg = {
    initial: { opacity: 0, y: 250 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeScrolltext = {
    initial: { opacity: 0, y: 200 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="container-fluid skewed">
      <div className="row">
        <h3 className="about">SOBRE MI</h3>
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
          <motion.div
            variants={fadeScrollImg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="contenedor-img"
          >
            <img className="img" src={img} alt="" />
          </motion.div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <motion.div
            variants={fadeScrolltext}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="descripcion"
          >
            <p>{props.description}</p>
            <a className="cv btn-cv" href={props.cv}>
              Descargar cv
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
