import {VARS} from "../../vars";

export class Socket {
    private name: string;
    private callback: any;

    constructor(name: string, callback:any) {
        this.name = name;
        this.callback = callback;
    }

    setup() {
        VARS.SOCKET.on(this.name, this.callback);
    }
}
