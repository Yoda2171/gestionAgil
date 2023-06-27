import { Comentario } from "./comentario";
import { Post } from "./post";
import { Chat } from './chat';

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
    comentario_id?: Comentario[];
    chat_id?:Chat[]
    current_user_id?:Chat[]
}