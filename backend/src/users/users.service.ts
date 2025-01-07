import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User} from './users.schema';
import { Model } from 'mongoose';
import { Paginate } from 'src/types/paginate';
@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async findByName(name: string){
        return this.userModel.find({name});
    }
    async findByMail(email: string){
        return this.userModel.findOne({email}).exec();
    }
    async getAllUsers(paginate: Paginate){
        return this.userModel.find({}).limit(paginate.limit??5);
    }
}
