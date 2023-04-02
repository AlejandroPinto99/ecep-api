import { pool } from '../db.js';

//INVESTIGAR MANEJO DE ERROR CON "EXPRESS PROMISE ROUTER"

// Obtener todos los municipios.
export const getMunicipios = async (req, res) =>  {
    try {
        const [rows] = await pool.query('SELECT * FROM municipio');
        res.json(rows);
    } catch (error) {
        return res.status(500).json('Ha ocurrido un error');
    }
}
