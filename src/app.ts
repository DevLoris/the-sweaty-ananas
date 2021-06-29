import {init} from "./lib/init";
import {AuthModule} from "./modules/auth/auth-module";
import {ProfileModule} from "./modules/profile/profile-module";
import {close} from "./lib/close";

init([
    new AuthModule(),
    new ProfileModule()
]);

close();

