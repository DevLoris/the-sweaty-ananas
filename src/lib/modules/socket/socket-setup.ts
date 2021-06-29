import {VARS} from "../../vars";

const { Server } = require("socket.io");

export function socketSetup() {
    let instance = new Server(VARS.HTTP);
    instance.engine = 'ws';
    VARS.SOCKET = instance;
}
