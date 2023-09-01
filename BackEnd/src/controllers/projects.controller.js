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
      "SELECT * FROM project WHERE id_project = ?"
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

export const postProject = (req, res) => {
  res.send("create project");
};

export const editProject = (req, res) => {
  res.send("project edit for id");
};

export const delProject = (req, res) => {
  res.send("project delete for id");
};
