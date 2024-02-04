import { IsDate, IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";
import { User } from "../entities/user.entity";
import { Prisma } from "@prisma/client";

export class CreateUserDto implements User {

    @IsString()
    username: string;

    @IsEmail()
    @IsString()
    email: string;

    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
      })
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
