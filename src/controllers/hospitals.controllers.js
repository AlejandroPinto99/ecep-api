import { pool } from "../db.js";

export const getHospitals = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM hospital');
        res.json(rows);
    } catch (error) {
        return res.status(500).json('Ha opcurrido un error');
    }
}