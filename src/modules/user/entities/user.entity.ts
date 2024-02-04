import { Prisma } from "@prisma/client";
import { Exclude } from "class-transformer";
import { IsOptional } from "class-validator";
import { UUID } from "crypto";

export class User {
    id?: UUID;
    username: string;
    email: string;

    @Exclude()
    password: string;
    sex: string;
    bio?: string;
    avatar?: string;
    birthday?: Date;
    tripInterests?: string;
    role: "USER" | "ADMIN";

    @IsOptional()
    activitie?: Prisma.activitiesUncheckedCreateNestedManyWithoutUserInput;
}

