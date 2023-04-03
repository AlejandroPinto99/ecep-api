import { pool } from '../db.js';

//INVESTIGAR MANEJO DE ERROR CON "EXPRESS PROMISE ROUTER"

// Obtener todos los pacientes de la tabla de paciente.
export const getPatients = async (req, res) =>  {
    try {
        const [rows] = await pool.query('SELECT a.fecha_registro, a.nombre_paciente, a.apellido_paciente, a.sexo, a.fecha_nacimiento, c.nombre_hospital, a.telefono_contacto, b.nombre_municipio, a.nombre_padre, a.nombre_madre, a.persona_refiere FROM paciente a inner join municipio b on a.id_municipio = b.id_municipio inner join hospital c on c.id_hospital = a.id_hospital_nacimiento');
        res.json(rows);
    } catch (error) {
        return res.status(500).json('Ha ocurrido un error');
    }
}

//Crear un nuevo paciente
export const createPatient = async (req, res) => {
    try {
        const {
            fecha_registro,
            nombre_paciente,
            apellido_paciente,
            sexo,
            fecha_nacimiento,
            id_hospital_nacimiento,
            telefono_contacto,
            id_municipio,
            nombre_padre,
            nombre_madre, 
            persona_refiere,
            } = req.body;
        const [rows] = await pool.query("INSERT INTO paciente (fecha_registro, nombre_paciente, apellido_paciente, sexo, fecha_nacimiento, id_hospital_nacimiento, telefono_contacto, id_municipio, nombre_padre, nombre_madre, persona_refiere) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [fecha_registro, nombre_paciente, apellido_paciente, sexo, fecha_nacimiento, id_hospital_nacimiento, telefono_contacto, id_municipio, nombre_padre, nombre_madre, persona_refiere])
        res.send({ 
            id: rows.insertId,
            nombre: nombre_paciente,
        });
    } catch (error) {
        return res.status(500).json('Ha ocurrido un error');
    }
};

// Actualizar información de un paciente
export const updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            fecha_registro,
            nombre_paciente,
            apellido_paciente,
            sexo,
            fecha_nacimiento,
            id_hospital_nacimiento,
            telefono_contacto,
            id_municipio,
            nombre_padre,
            nombre_madre, 
            persona_refiere,
        } = req.body;
    
        const [result] = await pool.query('UPDATE paciente SET fecha_registro = IFNULL(?, fecha_registro), nombre_paciente = IFNULL(?, nombre_paciente), apellido_paciente = IFNULL(?, apellido_paciente), sexo = IFNULL(?, sexo), fecha_nacimiento = IFNULL(?, fecha_nacimiento), id_hospital_nacimiento = IFNULL(?, id_hospital_nacimiento), telefono_contacto = IFNULL(?, telefono_contacto), id_municipio = IFNULL(?, id_municipio), nombre_padre = IFNULL(?, nombre_padre), nombre_madre = IFNULL(?, nombre_madre), persona_refiere = IFNULL(?, persona_refiere) WHERE id_paciente = ?',
        [fecha_registro, nombre_paciente, apellido_paciente, sexo, fecha_nacimiento, id_hospital_nacimiento, telefono_contacto, id_municipio, nombre_padre, nombre_madre, persona_refiere, id])
        if(result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Employee not found',
            })
        }
    
        const [rows] = await pool.query('SELECT * FROM paciente WHERE paciente.id_paciente = ?', [id]);
    
        res.send(rows);
    } catch (error) {
        return res.status(500).json('Ha ocurrido un error');
    }
};

//Borrar un paciente 
export const deletePatient = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM paciente WHERE paciente.id_paciente = ?', [req.params.id]);
        if(result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Employee not found',
            })
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json('Ha ocurrido un error');
    }

};