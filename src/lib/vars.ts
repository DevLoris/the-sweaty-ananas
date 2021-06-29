import {Express} from "express";
import {Connection} from "mysql";
import {Socket} from "socket.io";
import * as http from "http";

interface IVars {
  EXPRESS: Express,
  HTTP: http.Server,
  SOCKET: Socket,
  MYSQL_DB: Connection;
}

export const VARS: IVars = {
  EXPRESS: null,
  MYSQL_DB: null,
  SOCKET: null,
  HTTP: null
};
