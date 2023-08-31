import { pool } from "../db.js";

export const getProjects = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM project");
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "Ops!, algo salio mal" });
  }
};

export const getProject = (req, res) => {
  res.send("project for id");
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
