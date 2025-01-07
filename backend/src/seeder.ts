import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import { User, userSchema } from "./users/users.schema";
import { UsersSeeder } from "./seeders/users.seeder";
import { ConfigModule } from "@nestjs/config";
seeder({
    imports:[
        ConfigModule.forRoot({isGlobal:true}),
        MongooseModule.forRoot(process.env.MONGO_URI),
        MongooseModule.forFeature([
            {name: User.name, schema: userSchema}
        ]),
    ],
}).run([UsersSeeder]);