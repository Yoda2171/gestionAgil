import { Post } from "./post";
import { User } from "./user";

export interface Comentario {
    id?:number;
    comentario?:string;
    fechaCreacion?: string;
    user_id?:User;
    post_id?:Post;
    foto?: string;
    username?: string;

}