import { User } from './user';
export interface Chat{
    id?:number;
    user_id?:any;
    mensaje?:string;
    fechaCreacion?: string;
    current_user_id?:any;
}