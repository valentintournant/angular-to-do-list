import { Component } from "@angular/core";

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

})

export class TodoComponent{

  // todoOne: string = "Projet 1";
  // todoTwo: string = "Projet 2";
  // todoThree: string = "Projet 3";
  // todoFour: string = "Projet 4";

  // todos: string[] = ["Projet t1", "Projet t2", "Projet t3", "Projet t4"];

  todos = [
    {
      todoName: "Projet 1",
      todoStatus: true,
      image: "http://placehold.it/150",
      isModif: false
    },
    {
      todoName: "Projet 2",
      todoStatus: false,
      image: "http://placehold.it/150",
      isModif: false
    },
    {
      todoName: "Projet 3",
      todoStatus: true,
      image: "http://placehold.it/150",
      isModif: false
    },
    {
      todoName: "Projet 4",
      todoStatus: false,
      image: "http://placehold.it/150",
      isModif: false
    },
    {
      todoName: "Projet 5",
      todoStatus: true,
      image: "http://placehold.it/150",
      isModif: false
    },
  ];

  onChangeStatus(i: number){
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }

  onChangeIsModif(i: any){
    this.todos[i].isModif = !this.todos[i].isModif;
  }

}
