import { Post } from "./post";

export interface Data{
    data?: User;
    success?: boolean;
}

export interface User {
    id?: number;
    foto?: string;
    username?: string;
    correo?: string;
    password?: string;
    posts_id?: Post[];
}