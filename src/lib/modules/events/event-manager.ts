const EventEmitter = require('events');

export type EventManagerElement = {
    name: string,
    fct: () => any,
}

export class EventManager extends EventEmitter {
    private events: EventManagerElement[] = [];

    constructor() {
        super();
        this.events = [];
        this.setMaxListeners(200);
    };

    register(event_name: string, event_comportment: () => any) {
        this.events.push({
            name: event_name,
            fct : event_comportment
        });
        this.on(event_name, event_comportment);
    };

    unregister(event_name) {
        this.events.forEach(value =>  {
            if (value.name) {
                this.removeListener(value.name, value.fct);
            }
        });

        this.events = this.events.filter(value => {
            return value.name !== event_name;
        });
    };
};
