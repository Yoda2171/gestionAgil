import { Post } from "./post";

export interface Ramo {
    id?: number;
    ramo?:string;
    posts_id?: Post[];
}