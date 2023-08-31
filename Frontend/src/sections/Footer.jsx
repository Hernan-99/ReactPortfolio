import "../assets/styles/Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <section className="contenedor-media">
        <article className="media">
          <a
            href="https://www.linkedin.com/in/sanchez-hernan-gabriel/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Hernan-99" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </article>
        <hr />
        <p className="text-center">
          © 2023 - Desarrollado por <span className="link">Hernan Sanchez</span>
        </p>
      </section>
    </footer>
  );
};
