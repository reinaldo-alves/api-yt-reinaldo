import mysql from 'mysql';
import { config } from 'dotenv';

config();

const pool = mysql.createPool({
    "user":"root", //process.env.USER_DATABASE,
    "password":"316599database", //process.env.PASSWORD_DATABASE,
    "database":"api-yt-project", //process.env.DATABASE,
    "host":"localhost", //process.env.HOST_DATABASE,
    "port":3306  //Number(process.env.PORT_DATABASE)
})

export { pool };