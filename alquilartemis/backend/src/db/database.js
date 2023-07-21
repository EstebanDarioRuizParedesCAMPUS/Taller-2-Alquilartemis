import mysql from "promise-mysql"
import config from "../config.js"

const conection= mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
})

const getConection = () =>{
    return conection
}

export default getConection;