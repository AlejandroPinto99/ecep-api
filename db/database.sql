{
    "fecha_registro": "2020-04-02",
    "nombre_paciente": "ALEJANDRA GUADALUPE",
    "apellido_paciente": "ESTEVEZ LOYOLA",
    "sexo": "F",
    "fecha_nacimiento": "2020-06-02",
    "id_hospital_nacimiento": 6
    "telefono_contacto": "2524-9171",
    "id_municipio": 1,
    "nombre_padre": "BYRON ESTEVEZ",
    "nombre_madre": "SOFIA LOYOLA",
    "persona_refiere": "NA",
}

SELECT a.nombre_paciente, a.apellido_paciente, b.nombre_municipio FROM paciente a inner join municipio b on a.id_municipio = b.id_municipio