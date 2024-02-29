import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { User } from "../entities/user.entity";
import { Prisma } from "@prisma/client";

export class CreateUserDto implements User {

    @IsString()
    username: string;

    @IsEmail()
    @IsString()
    email: string;

    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    //     message: 'password too weak',
    //   })
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    bio?: string;

    @IsOptional()
    @IsString()
    avatar?: string;

    @IsString()
    birthday: string;

    @IsOptional()
    @IsString()
    tripInterests?: string;

    role: "USER" | "ADMIN";

    activitie?: Prisma.activitiesUncheckedCreateNestedManyWithoutUserInput;
}
