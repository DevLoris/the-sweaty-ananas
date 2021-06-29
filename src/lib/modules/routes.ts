import {VARS} from "../vars";

export class Routes {
    private path: string;
    private method: string;
    private callback: any[];

    constructor(method: string, path: string, ...callback:any) {
        this.path = path;
        this.method = method;
        this.callback = callback;
    }
    
    setup() {
        VARS.EXPRESS[this.method](this.path, ...this.callback)
    }
}
