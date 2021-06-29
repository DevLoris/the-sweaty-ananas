import {init} from "./lib/init";
import {AuthModule} from "./modules/auth/auth-module";
import {ProfileModule} from "./modules/profile/profile-module";
import {DataCache} from "./lib/modules/cache/data-cache";

init([
    new AuthModule(),
    new ProfileModule()
]);

let data  = new DataCache<{name: string}>([
    { name: "Loris" }
]);

