import Module from "../module";

export function setupModule(module: Module) {
    module.setup();
    module.getRoutes().forEach(value => {
        value.setup();
    })
    module.getSockets().forEach(value => {
        value.setup();
    })
}
