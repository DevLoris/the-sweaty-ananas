import {Routes} from "./routes";
import {Socket} from "./socket/socket";

export default class Module {
    public _routes: Routes[] = [];
    public _sockets: Socket[] = [];

    constructor() {
    }

    setup() {}

    getRoutes(): Routes[] {
        return this._routes;
    }

    getSockets(): Socket[] {
        return this._sockets;
    }
}
