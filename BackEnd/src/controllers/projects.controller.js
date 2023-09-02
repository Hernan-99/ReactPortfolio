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
      name_project,
      description_project,
      img_project,
      link_demo,
      link_code,
    });
  } catch (error) {
    res.status(500).send({ message: "Ops!, ocurrio un error" });
    console.log(error);
  }
};

export const patchProject = async (req, res) => {
  const { id } = req.params;
  const {
    name_project,
    description_project,
    img_project,
    link_demo,
    link_code,
  } = req.body;

  try {
    const result = await pool.query(
      "UPDATE project SET name_project = IFNULL(?, name_project), description_project = IFNULL(?, description_project), img_project = IFNULL(?, img_project), link_demo = IFNULL(?, link_demo), link_code = IFNULL(?, link_code) WHERE id_project = ?",
      [name_project, description_project, img_project, link_demo, link_code, id]
    );

    if (result.affectedRows) {
      return res.status(404).send({ message: "Ops!, pryecto no encontrado" });
    }

    const [rows] = await pool.query(
      "SELECT * FROM project WHERE id_project = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).send({ message: "Ops!, ocurrio un error" });
  }
};

export const delProject = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM project WHERE id_project = ?",
      [req.params.id]
    );
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Ops!, proyecto no encontrado " });
    }
    res.status(204);
    res.send("Proyecto eliminado");
  } catch (error) {
    res.status(500).json({ message: "Ops!, algo salio mal" });
    console.log(error);
  }
};
