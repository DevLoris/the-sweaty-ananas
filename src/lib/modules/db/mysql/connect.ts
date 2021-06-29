import * as mysql from "mysql";
import {VARS} from "../../../vars";

require('dotenv').config();

const connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_NAME,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DB
});

export function mysqlSetup() {
    connection.connect();

    VARS.MYSQL_DB = connection;
};

