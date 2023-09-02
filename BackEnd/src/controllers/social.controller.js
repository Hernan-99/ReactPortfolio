import { pool } from "../db.js";
export const getSocials = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM social");
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "Ops!, ocurrio un error" });
    console.log(error);
  }
};

export const getSocial = async (req, res) => {
  res.send("social for id");
};

export const postSocial = async (req, res) => {
  res.send("create social");
};

export const editSocial = async (req, res) => {
  res.send("edit social");
};

export const delSocial = async (req, res) => {
  res.send("delete social");
};
