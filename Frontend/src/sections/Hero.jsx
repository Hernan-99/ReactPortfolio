import "../assets/styles/Hero.css";
import { motion } from "framer-motion";

export const Hero = (props) => {
  return (
    <motion.section
      className="container text-md-start text-lg-start text-center  hero"
      initial={{ color: "#fff", x: -300 }}
      transition={{ duration: 0.6 }}
      animate={{ x: 0, color: "#272341" }}
    >
      <article className="row">
        <div sm={12}>
          <h1>
            Hola, mi nombre es{" "}
            <motion.span
              initial={{ color: "#fff" }}
              animate={{ color: "#00cdac" }}
              className="nombre"
            >
              {props.name}
            </motion.span>
            <br />
            {props.profession}
          </h1>
          <button className="btnA btn-about">Sobre mi</button>
        </div>
      </article>
    </motion.section>
  );
};
