import { Ramo } from "./ramos";
import { User } from "./user";

export interface Data{
    data?: Post;
    success?: boolean;
}

export interface Post {
    id?: number;
    titulo?: string;
    body?: string;
    comentarios?: string;
    likes?:number;
    fechaCreacion?: string;
    user_id?: User;
    ramo_id?: Ramo;
}