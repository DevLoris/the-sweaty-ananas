import {RegisterMethod} from "./register-method";

export interface IProfile {
    uuid: string,
    name: string,
    provider_name: RegisterMethod,
    provider_id: string,
}
