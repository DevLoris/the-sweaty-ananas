import Module from "./modules/module";
import {setupModule} from "./modules/helper/module-helper";
import {connectDb} from "./modules/db/db";
import express from "express";
import {expressSetup} from "./modules/api/express-setup";
import {socketSetup} from "./modules/socket/socket-setup";
import {serverEvent, ServerEventManagerName, setupServerEventManager} from "./modules/events/server-event-manager";

require('dotenv').config();

export function init(modules: Module[]) {
    // EVENT
    setupServerEventManager();

    // DB
    connectDb();

    // EXPRESS SETTINGS
    const app = express();
    expressSetup(app);

    // IO
    socketSetup();

    // PREPARE MODULES
    modules.forEach(value => setupModule(value));

    // EMIT START EVENT
    serverEvent(ServerEventManagerName.START);
}
