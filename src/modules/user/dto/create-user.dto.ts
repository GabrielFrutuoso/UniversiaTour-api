import { User } from "../entities/user.entity";

export class CreateUserDto implements User {
    id: `${string}-${string}-${string}-${string}-${string}`;
    username: string;
    email: string;
    password: string;
    sex?: string;
    bio?: string;
    avatar?: string;
    birthday?: Date;
    tripInterests?: string;
    role: "USER" | "ADMIN";
}
