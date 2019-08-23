import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor( private todoService: TodoService ) { }

  ngOnInit() {
  }

  setClasses(){

    let classes = {
      'todo': true, //will always return class '.todo'
      'is-completed': this.todo.completed 
    }

    return classes;
  }

  onToggle( t ){
    //toggle on client
    t.completed = !t.completed;
    //toggle on server
    this.todoService.toggleCompleted(t).subscribe( data =>{
      console.log( data ); 
    });
  }

  onDelete( t ){
    this.deleteTodo.emit( t );
  }

}
