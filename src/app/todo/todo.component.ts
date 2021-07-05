import { Component } from "@angular/core";

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

})

export class TodoComponent{
  todoOne: string = "Projet 1";
  todoTwo: string = "Projet 2";
  todoThree: string = "Projet 3";
  todoFour: string = "Projet 4";

  todos: string[] = ["Projet t1", "Projet t2", "Projet t3", "Projet t4", "Projets T6", "Projet t8"];
}
