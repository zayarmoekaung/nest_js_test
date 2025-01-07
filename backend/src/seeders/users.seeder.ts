import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../users/users.schema";
import { Seeder, DataFactory } from "nestjs-seeder";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersSeeder implements Seeder {
    constructor(@InjectModel(User.name) private readonly user: Model<User>) {}
    async seed(): Promise<any> {
        const users = DataFactory.createForClass(User).generate(20);
        for (const user of users) {
            user.password = await bcrypt.hash(user.password as string,10);
        }
        return this.user.insertMany(users);
    }
    async drop(): Promise<any> {
        return this.user.deleteMany({});
    }
}