import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './users.schema';
@Module({
  imports:[
    MongooseModule.forFeature(
      [
        {name: User.name, schema: userSchema}
      ]
    )
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
