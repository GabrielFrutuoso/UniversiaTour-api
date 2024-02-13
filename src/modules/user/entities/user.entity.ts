import { Prisma } from "@prisma/client";
import { IsOptional } from "class-validator";
import { UUID } from "crypto";

export class User {
    id?: UUID;
    username: string;
    email: string;
    password: string;
    bio?: string;
    avatar?: string;
    birthday?: string;
    tripInterests?: string;
    role: "USER" | "ADMIN";

    @IsOptional()
    activitie?: Prisma.activitiesUncheckedCreateNestedManyWithoutUserInput;
}

