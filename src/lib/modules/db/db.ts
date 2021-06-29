import {mysqlSetup} from "./mysql/connect";

enum DBType {
    MY_SQL = "mysql"
}

export function connectDb() {
    switch (process.env.DB_TYPE) {
        case DBType.MY_SQL:
            mysqlSetup();
    }
}
