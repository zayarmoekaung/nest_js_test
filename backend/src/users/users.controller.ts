import { Controller } from '@nestjs/common';
import { Body, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { userType } from 'src/types/user.type';
import * as bcrypt from 'bcrypt'
import { Paginate } from 'src/types/paginate';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post('login')
    async login(@Body() userdata: userType) {
        const user = await this.userService.findByMail(userdata.email);
        if (!user || !(await bcrypt.compare(userdata.password, user?.password))) {
            return { authed : false};
        }
        return {
            user,
            authed: true
        }
    }
    @Post()
    async allUsers(@Body() paginate: Paginate) {
        const users = await this.userService.getAllUsers(paginate);
        return {
            users
        }
    }
}
