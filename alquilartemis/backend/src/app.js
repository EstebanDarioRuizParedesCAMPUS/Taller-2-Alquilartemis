import express from "express";
import routerCategoria from "./routes/categorias.routes.js";
import routerConstructoras from "./routes/constructoras.routes.js";
import routerEmpleados from "./routes/empleados.routes.js";
import routerProductos from "./routes/productos.routes.js";

const app = express();
app.set("port",7000);

app.use("/api/categorias",routerCategoria);
app.use("/api/constructoras",routerConstructoras);
app.use("/api/empleados",routerEmpleados);
app.use("/api/productos",routerProductos);

export default app;