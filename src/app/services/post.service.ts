import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http:HttpClient,
  ) { }
  
  getPosts(){
    return this.http.get('http://localhost:3000/post');
  }

  createPosts(post:any){
    return this.http.post('http://localhost:3000/post',post);
  }

  deletePost(id:number){
    return this.http.delete('http://localhost:3000/posts/'+id);
  }

  updatePost(post:any){
    return this.http.patch('http://localhost:3000/posts/'+post.id,post);
  }



  createComentario(post:any,comentario:any){
    return this.http.post('http://localhost:3000/post/'+post,comentario);
  }


  getComentarios(id:number){
    return this.http.get('http://localhost:3000/post/'+id+'/comentarios');
  }






}
