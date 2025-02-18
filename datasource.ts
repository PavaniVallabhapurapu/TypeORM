import {DataSource} from "typeorm"
import { User } from "../entities/User.entity"
import { Profile } from "../entities/Profile.entity"
// import { Test } from "../entities/test"
const datasource = new DataSource({
    type : "postgres",
    host : "localhost",
    port : 8080,
    username : "postgres",
    password : "pavani",
    database : "test",
    logging : true,
    synchronize : true,
    entities : [
        User,
        Profile
        // Test
    ]
})

export default datasource