import {VARS} from "../../../vars";
import {OkPacket} from "mysql";

export class Table<T> {
    private name: string;

    constructor(name) {
        this.name = name;
    }

    findOne(params: Partial<T>, callback: (result: any) => any) {
        const request = `SELECT * FROM ${this.name} ${Object.keys(params).length > 0 ? "WHERE ": ""} ${Object.keys(params).map(value => `\`${value}\` = ?`).join(" AND ")}`;
        VARS.MYSQL_DB.query(
            request,
            Object.values(params),
            ((err, results) => {
                callback(results[0]);
            })
        )
    }

    findAll(params: Partial<T>, callback: (result: any) => any) {
        const request = `SELECT * FROM ${this.name} ${Object.keys(params).length > 0 ? "WHERE ": ""} ${Object.keys(params).map(value => `\`${value}\` = ?`).join(" AND ")}`;
        VARS.MYSQL_DB.query(
            request,
            Object.values(params),
            ((err, results) => {
                callback(results[0]);
            })
        )
    }

    insert(data: T, callback: (result: any) => any) {
        const request = `INSERT INTO ${this.name} SET ?`;
        VARS.MYSQL_DB.query(
            request,
            data,
            ((err, results) => {
                callback(results[0]);
            })
        )
    }

    update(data: Partial<T>, where: Partial<T>, callback: (result: OkPacket) => any) {
        const request = `UPDATE ${this.name} SET  ${Object.keys(data).map(value => `\`${value}\` = ?`).join(", ")} ${Object.keys(where).length > 0 ? "WHERE ": ""} ${Object.keys(where).map(value => `\`${value}\` = ?`).join(" AND ")}`;
        VARS.MYSQL_DB.query(
            request,
            [...Object.values(data), ... Object.values(where)],
            ((err, results) => {
                callback(results);
            })
        )
    }

    query(query: string, callback: (result: any) => any) {
        VARS.MYSQL_DB.query(
            query,
            ((err, results) => {
                callback(results);
            })
        )
    }
}
