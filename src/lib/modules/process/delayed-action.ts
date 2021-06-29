export class DelayedAction {
    private delay: number;
    private repeat: number;
    private processId: NodeJS.Timeout;
    private t: number;
    private callback: () => any;

    constructor(delay = 5, repeat = 10, callback: () => any, autostart = false) {
        this.delay = delay;
        this.repeat = repeat;
        this.processId = null;
        this.t = 0;

        this.callback = callback;

        if (autostart)
            this.exec();
    }

    cancel() {}

    exec() {
        this.processId = setInterval(() => {
            this.callback();

            this.t++;
            if(this.t >= this.repeat)
                this._finished();
        }, this.delay);
    }

    private _finished() {
        clearInterval(this.processId);
        this.processId = null;
        this.cancel();
    }
}
