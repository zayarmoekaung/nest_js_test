import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Factory } from 'nestjs-seeder';
@Schema()
export class User extends Document {
   
    @Factory((faker) => faker.person.fullName())
    @Prop({required: true})
    name: string;
   
    @Factory((faker) => faker.internet.email())
    @Prop({required: true, unique: true})
    email: string;

    //use default password 
    @Factory('password123')
    @Prop({required: true})
    password: string
   
    @Factory((faker) => faker.location.streetAddress)
    @Prop({required: false})
    address: string;
   
    @Factory((faker) => faker.datatype.boolean())
    @Prop({required: true})
    isActive: boolean;

}

export const userSchema = SchemaFactory.createForClass(User)