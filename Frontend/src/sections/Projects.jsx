import "../assets/styles/Proyectos.css";
import img from "../assets/img/imgproyecto.jpg";
import cuestionario from "../assets/img/cuestionario.png";
import adivinar from "../assets/img/adivinar.png";
import fromulario from "../assets/img/formulario.png";
import trecafe from "../assets/img/trecafe.png";
import restaurante from "../assets/img/restaurante.png";

import { motion, useMotionValue } from "framer-motion";

export const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const efectoX = useMotionValue(y, [-100, 100], [30, -30]);
  const efectoY = useMotionValue(x, [100, -100], [-30, 30]);

  const fadeScrollImg = {
    initial: { opacity: 0, y: 250 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section className="container container-proyectos">
      <h3 className="proyectos">PROYECTOS</h3>
      <article className="row contain d-flex justify-content-between">
        <div className="col-12 col-lg-4 mb-4 mb-md-5">
          <motion.div
            transition={{ duration: 0.6 }}
            variants={fadeScrollImg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="container-trabajos"
          >
            <div className="card-text w-100">
              <h4 className="titulo">Juego de preguntas</h4>
              <p>
                Esta app fue desarrollada con React js, TypeScript para la
                funcionalidad dinámica, Bootstrap para el diseño y HTML/CSS para
                la estructura y el estilo. Además, integra el consumo con axios
                de un JSON que simula una API externa.
              </p>
              <div className="container-btns">
                <button className="live btn-live">Ver Demo</button>
                <button className="btn-code">Ver Codigo</button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-12 col-lg-8 mb-4 mb-md-5">
          <motion.div
            transition={{ duration: 0.6 }}
            variants={fadeScrollImg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="card-img"
          >
            <img src={cuestionario} alt="" />
          </motion.div>
        </div>

        <div className="col-12 col-lg-4 mb-4 mb-md-5">
          <motion.div
            transition={{ duration: 0.6 }}
            variants={fadeScrollImg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="container-trabajos"
          >
            <div className="card-text w-100">
              <h4 className="titulo">Cual es mi numero</h4>
              <p>
                Juego interactivo. Desarrollado utilizando HTML, CSS y
                JavaScript, este juego te reta a adivinar un número secreto en
                un máximo de 10 intentos
              </p>
              <div className="container-btns">
                <button className="live btn-live">Ver Demo</button>
                <button className="btn-code">Ver Codigo</button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-12 col-lg-8 mb-4 mb-md-5">
          <motion.div
            transition={{ duration: 0.6 }}
            variants={fadeScrollImg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="card-img"
          >
            <img src={adivinar} alt="" />
          </motion.div>
        </div>

        <div className="col-12 col-lg-4 mb-4 mb-md-5">
          <motion.div
            transition={{ duration: 0.6 }}
            variants={fadeScrollImg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="container-trabajos"
          >
            <div className="card-text w-100">
              <h4 className="titulo">Landing page cafeteria</h4>
              <p>
                App desarrollada con JavaScript y Jquery para aplicar
                funcionalidad, HTML y CSS para la estructura y el estilo.
              </p>
              <div className="container-btns">
                <button className="live btn-live">Ver Demo</button>
                <button className="btn-code">Ver Codigo</button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-12 col-lg-8 mb-4 mb-md-5">
          <motion.div
            transition={{ duration: 0.6 }}
            variants={fadeScrollImg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="card-img"
          >
            <img src={trecafe} alt="" />
          </motion.div>
        </div>

        <div className="col-12 col-lg-4 mb-4 mb-md-5">
          <motion.div
            transition={{ duration: 0.6 }}
            variants={fadeScrollImg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="container-trabajos"
          >
            <div className="card-text w-100">
              <h4 className="titulo">Formulario de pago interactivo</h4>
              <p>
                Formulario interactivo de pago desarrollado con html, css y
                vanilla js
              </p>
              <div className="container-btns">
                <button className="live btn-live">Ver Demo</button>
                <button className="btn-code">Ver Codigo</button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-12 col-lg-8 mb-4 mb-md-5">
          <motion.div
            transition={{ duration: 0.6 }}
            variants={fadeScrollImg}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="card-img"
          >
            <img src={fromulario} alt="" />
          </motion.div>
        </div>
      </article>
    </section>
  );
};
