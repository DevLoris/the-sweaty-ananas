import {Express} from "express";
import {Connection} from "mysql";
import {Socket} from "socket.io";
import * as http from "http";
import {ServerEventManager} from "./modules/events/server-event-manager";

interface IVars {
  EXPRESS: Express,
  HTTP: http.Server,
  SOCKET: Socket,
  MYSQL_DB: Connection,
  SERVER_EVENT_MANAGER: ServerEventManager,
}

export const VARS: IVars = {
  EXPRESS: null,
  MYSQL_DB: null,
  SOCKET: null,
  HTTP: null,
  SERVER_EVENT_MANAGER: null,
};
