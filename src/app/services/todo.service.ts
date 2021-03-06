import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "../models/todo.model";
//décorateur injéctable si dépend d'autres services
//le root permet de ne plus l'inhécter ans le app.module
@Injectable({
  providedIn: 'root'
})
export class TodoService{
  // todoOne: string = "Projet 1";
  // todoTwo: string = "Projet 2";
  // todoThree: string = "Projet 3";
  // todoFour: string = "Projet 4";

  // todos: string[] = ["Projet t1", "Projet t2", "Projet t3", "Projet t4"];

  today = new Date();
  todos: Todo[] | any;
  todoSubject = new Subject<any>();
  // todoSlice: any;
  // lastUpdate: any;
  // lastUpdate2: any;


  constructor(private httpClient: HttpClient) {
    this.getTodosFromServer();
  }
    //si tu sais que la promese va se résoudre à chaques fois :
    // this.lastUpdate = Promise.resolve(new Date());
    // this.lastUpdate = Promise.reject("Pas de données disponible actuellement");

    //façon de faire la plus complète.
  //   this.todos = new Promise((resolve, reject) =>{
  //     const data = [
  //       {
  //         todoName: "Projet 1",
  //         todoStatus: true,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //       {
  //         todoName: "Projet 2",
  //         todoStatus: false,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //       {
  //         todoName: "Projet 3",
  //         todoStatus: true,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //       {
  //         todoName: "Projet 4",
  //         todoStatus: false,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //       {
  //         todoName: "Projet 5",
  //         todoStatus: true,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //     ];
  //     if(data.length) {
  //       setTimeout(()=>{
  //         this.todoSlice = data;
  //         resolve(data);
  //       },2000);
  //     } else {
  //       reject("Pas de données disponibles sur le serveur");
  //     }
  //   });
  // }

  //   setTimeout(()=>{
  //     this.todos = [
  //       {
  //         todoName: "Projet 1",
  //         todoStatus: true,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //       {
  //         todoName: "Projet 2",
  //         todoStatus: false,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //       {
  //         todoName: "Projet 3",
  //         todoStatus: true,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //       {
  //         todoName: "Projet 4",
  //         todoStatus: false,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //       {
  //         todoName: "Projet 5",
  //         todoStatus: true,
  //         image: "http://placeimg.com/300/300/tech",
  //         isModif: false,
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //       },
  //     ];
  //     //les infos du dessus vont dans une fonction ui est ici :
  //     this.emitTodos();
  //   },3000);

  emitTodos(){
    this.todoSubject.next(this.todos);
  }

  onChangeStatus(i: number){
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    //vu que les données change on doit les émettre
    this.emitTodos();
    this.saveTodosFromServer();
  }

  onChangeIsModif(i: any){
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodos();
    this.saveTodosFromServer();
  }

  getTodo(index: number){
    if(this.todos[index]) {
      return this.todos[index];
    }
    return false;
  }

  addTodo(todo: Todo): void {
    this.todos.unshift(todo);
    this.emitTodos();
    this.saveTodosFromServer();
  }

  saveTodosFromServer(): void {
    this.httpClient.put("https://todo-list-app-6c5e4-default-rtdb.europe-west1.firebasedatabase.app/todos.json", this.todos)
    .subscribe(
      () => {
        console.log("Données enregistrées avec succès !");
      },
      (error) => {
        console.log("Erreur de sauvegarde : "+error)
      }
    );
  }

  getTodosFromServer(): void {
    this.httpClient.get<Todo[]>("https://todo-list-app-6c5e4-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
    .subscribe(
      (todoRecup: Todo[]) => {
        this.todos = todoRecup;
        this.emitTodos();
      },
      (error) => {
        console.log("Erreur de récupération des données : "+error)
      },
      () => {
        console.log("Récupération des données terminée");
      }
    );
  }

}
