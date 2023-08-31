import { pool } from "../db.js";

export const getProfile = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM profile");
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "Ops!, algo salio mal" });
    console.log(error);
  }
};

export const getProfileId = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM profile WHERE id_profile = ?",
      [req.params.id]
    );

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Ops!, algo salio mal" });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({ message: "Ops!, algo salio mal" });
    console.log(error);
  }
};

export const patchProfile = async (req, res) => {
  const { id } = req.params;
  const {
    fullname_profile,
    profession_profile,
    img_profile,
    description_profile,
    cv_profile,
  } = req.body;

  try {
    const result = await pool.query(
      "UPDATE profile SET fullname_profile = IFNULL (?, fullname_profile), profession_profile = IFNULL (?, profession_profile), img_profile = IFNULL (?, img_profile), description_profile = IFNULL (?, description_profile), cv_profile = IFNULL (?, cv_profile) WHERE id_profile = ?",
      [
        fullname_profile,
        profession_profile,
        img_profile,
        description_profile,
        cv_profile,
        id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Ops!, perfil no encontrado" });
    }

    const [rows] = await pool.query(
      "SELECT * FROM profile WHERE id_profile = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Ops!, algo salio mal" });
  }
};
