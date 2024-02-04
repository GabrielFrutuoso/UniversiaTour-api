import { Prisma } from "@prisma/client";
import { UUID } from "crypto";

export class User {
    id?: UUID;
    username: string;
    email: string;
    password?: string;
    sex: string;
    bio?: string;
    avatar?: string;
    birthday?: Date;
    tripInterests?: string;
    role: "USER" | "ADMIN";
    activitie?: Prisma.activitiesUncheckedCreateNestedManyWithoutUserInput;
}

