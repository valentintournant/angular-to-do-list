import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TodoService } from "../services/todo.service";

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

})

//Permet de savoir quand c'est initialisisé "OnInit"
export class TodoComponent implements OnInit, OnDestroy{
  today: any;
  todos: any;
  todosSub: Subscription | any;

  constructor(private todoService: TodoService,
              private router : Router){

  }
  ngOnInit(){
    this.today = this.todoService.today;
    // this.todoService.todos
    // .then((todoRecup: any) =>{
    //   this.todos = todoRecup;
    // })
    // .catch((error: string) =>{
    //   console.log("Erreur : "+ error)
    // });
    this.todosSub = this.todoService.todoSubject.subscribe(
      (value: any[])=> {
        this.todos = value;
      },
      (error) => {
        console.log("Erreur : "+error);
      },
      () => {
        console.log("Observable completée");
      }
    );
    this.todoService.emitTodos();
  }

  onChangeStatus(i: number){
    this.todoService.onChangeStatus(i);
  }

  onChangeIsModif(i: number){
    this.todoService.onChangeIsModif(i);
  }

  onView(id: number){
    this.router.navigate(["single-todo", id]);
  }

  ngOnDestroy() {
    this.todosSub.unsubscribe();
  }
}
