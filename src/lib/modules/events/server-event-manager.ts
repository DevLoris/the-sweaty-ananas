import {EventManager} from "./event-manager";
import {VARS} from "../../vars";

export enum ServerEventManagerName {
    START = "START_EVENT",
    STOP = "STOP_EVENT",
}

export class ServerEventManager extends EventManager {}

export function setupServerEventManager() {
    VARS.SERVER_EVENT_MANAGER = new ServerEventManager();
}

export function serverEvent(name: ServerEventManagerName) {
    VARS.SERVER_EVENT_MANAGER.emit(name);
}
