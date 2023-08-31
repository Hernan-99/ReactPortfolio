import "../assets/styles/About.css";
import img from "../assets/img/img.jpg";
import { motion } from "framer-motion";
export const About = () => {
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
            <p>
              Actualmente estudio una tecnicatura en desarrollo de software y
              por otro lado, complemento mis estudios formales de forma
              autodidacta aprendiendo diseño y desarrollo web. Soy una persona
              comprometida con gran interés en las nuevas tecnologías, me
              capacito constantemente para superarme. Mi meta actual es
              pertenecer a una empresa y equipo donde pueda aplicar mis
              conocimientos de forma profesional, que me acompañe en mi progreso
              personal y laboral, y a la cual pueda aportar toda mi dedicación,
              conocimientos y habilidades.
            </p>
            <button className="cv btn-cv">Descargar cv</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
