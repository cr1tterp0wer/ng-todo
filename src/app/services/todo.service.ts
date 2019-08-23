import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor( private http:HttpClient ) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>( `${this.todosUrl}${this.todosLimit}`);  
  }

  // Toggle Completed
  toggleCompleted( todo: Todo ):Observable<any>{
    console.log(todo);
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put( url, todo, httpOptions );
  }

  deleteTodo( todo: Todo ){
    console.log( todo );
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>( url, httpOptions ); 
  }

  addTodo( todo: Todo ){
    const url = `${this.todosUrl}`;
    return this.http.post<Todo>( url, todo, httpOptions );
  }

}
