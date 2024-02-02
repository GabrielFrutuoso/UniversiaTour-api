export class CreateUserDto {
    username: string;
    email: string;
    password: string;
    bio?: string;
    tripInterests?: string;
    sex?: string;
    avatar?: string;
    birthday?: string;
}
