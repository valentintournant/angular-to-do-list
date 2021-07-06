import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

})

//Permet de savoir quand c'est initialisisé "OnInit"
export class TodoComponent implements OnInit{
  today: any;
  todos: any;

  constructor(private todoService: TodoService){

  }
  ngOnInit(){
    this.today = this.todoService.today;
    this.todos = this.todoService.todos;

  }

  onChangeStatus(i: number){
    this.todoService.onChangeStatus(i);
  }

  onChangeIsModif(i: any){
    this.todoService.onChangeIsModif(i);
  }
}
