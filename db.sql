CREATE DATABASE "1000Pagos";

CREATE TABLE usuarios (
    id_usuario int NOT NULL PRIMARY KEY,
    usuario varchar(255) NOT NULL,
    contrasena varchar(255) NOT NULL,
	nombre_completo varchar(255) NOT NULL,
	correo varchar(255) NOT NULL,
	estatus varchar(2) NOT NULL,
	creado datetime DEFAULT GETDATE(),
	modificado datetime DEFAULT GETDATE()
);