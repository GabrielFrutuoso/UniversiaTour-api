import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { User } from "../entities/user.entity";
import { Prisma } from "@prisma/client";

export class CreateUserDto implements User {

    @IsString()
    username: string;

    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    sex: string;

    @IsString()
    bio?: string;

    @IsString()
    avatar?: string;

    @IsDate()
    birthday: Date;

    @IsNotEmpty()
    tripInterests?: string;
    role: "USER" | "ADMIN";

    activitie?: Prisma.activitiesUncheckedCreateNestedManyWithoutUserInput;
}
