export const queries = {
    // Usuarios
    getAllUsuarios: "SELECT * FROM dbo.usuarios",
    getUsuarioById: "SELECT * FROM dbo.usuarios WHERE id = @id",
    getUsuarioByUser: "SELECT * FROM dbo.usuarios WHERE usuario = @usuario",
    getUsuarioByUserPass:
        "SELECT * FROM dbo.usuarios WHERE usuario = @usuario AND contrasena = @contrasena",
};
