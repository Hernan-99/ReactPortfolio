import { pool } from "../db.js";

export const getProjects = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM project");
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "Ops!, algo salio mal" });
  }
};

export const getProject = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM project WHERE id_project = ?",
      [req.params.id]
    );
    if (!rows.length) {
      return res.status(404).send({ message: "Ops!, algo salio mal" });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(404).send({ message: "Ops!, algo salio mal" });
  }
};

export const postProject = async (req, res) => {
  const {
    name_project,
    description_project,
    img_project,
    link_demo,
    link_code,
  } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO project (name_project, description_project, img_project, link_demo, link_code, profile_project_id) VALUES (?,?,?,?,?,1)",
      [description_project, img_project, link_demo, link_code, name_project]
    );
    res.send({
      id: rows.insertId,
      description_project,
      img_project,
      link_demo,
      link_code,
      name_project,
    });
  } catch (error) {
    res.status(500).send({ message: "Ops!, ocurrio un error" });
    console.log(error);
  }
};

export const editProject = (req, res) => {
  res.send("project edit for id");
};

export const delProject = (req, res) => {
  res.send("project delete for id");
};
