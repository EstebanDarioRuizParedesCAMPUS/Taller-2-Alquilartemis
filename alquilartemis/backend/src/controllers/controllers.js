import getConection from "../db/database.js";

const getCategorias = async (req,res)=>{
    try {
        const conection = await getConection()
        const result = await conection.query("SELECT id_categoria, nombre_categoria, descripcion_categoria, img_categoria FROM categorias")
        res.json(result)
        console.log(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getConstructoras = async (req,res)=>{
    try {
        const conection = await getConection()
        const result = await conection.query("SELECT id_constructora,nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto FROM constructoras")
        res.json(result)
        console.log(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getEmpleados = async (req,res)=>{
    try {
        const conection = await getConection()
        const result = await conection.query("SELECT id_empleado,nombre_empleado,email_empleado,celular_empleado,password_empleado FROM empleados")
        res.json(result)
        console.log(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getProductos = async (req,res)=>{
    try {
        const conection = await getConection()
        const result = await conection.query("SELECT id_producto,nombre_producto,precio_x_dia,stock_producto,categoria_producto FROM productos")
        res.json(result)
        console.log(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const methodsHTTP = {
    getCategorias,
    getConstructoras,
    getEmpleados,
    getProductos,
}