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
  try {
    const [rows] = await pool.query(
      "SELECT * FROM social WHERE id_social = ?",
      [req.params.id]
    );

    if (!rows.length) {
      res.status(404).json({ message: "Ops!, red social no encontrada" });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({ message: "Ops!, ocurrio un error" });
    console.log(error);
  }
};

export const postSocial = async (req, res) => {
  try {
    const { icon_social, link_social } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO social (icon_social, link_social, profile_social_id) VALUES (?,?,1)",
      [icon_social, link_social]
    );
    res.send({
      id: rows.insertId,
      icon_social,
      link_social,
    });
  } catch (error) {
    res.status(500).json({ message: "Ops!, ocurrio un error" });
  }
};

export const patchSocial = async (req, res) => {
  try {
    const { id } = req.params;
    const { icon_social, link_social } = req.body;

    const results = await pool.query(
      "UPDATE social SET icon_social = IFNULL(?, icon_social), link_social = IFNULL(?, link_social) WHERE id_social = ?",
      [icon_social, link_social, id]
    );

    if (results.affectedRows) {
      return res
        .status(404)
        .json({ message: "Ops!, red social no encontrada" });
    }

    const [rows] = await pool.query(
      "SELECT * FROM social WHERE id_social = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Ops!, ocurrio un error" });
    console.log(error);
  }
};

export const delSocial = async (req, res) => {
  res.send("delete social");
};
