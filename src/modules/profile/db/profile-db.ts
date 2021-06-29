import {Table} from "../../../lib/modules/db/mysql/table";
import {IProfile} from "../models/profile";

export class ProfileDb extends Table<IProfile> {
    constructor() {
        super("profile");
    }
}
