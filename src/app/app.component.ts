import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'angular-crash-todolist';

  constructor(){
    this.changeName('john');
  }

  changeName(name:string):void{
    this.name = name;
  }

}
