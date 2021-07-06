import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { TodoService } from "./services/todo.service";

@NgModule({
declarations: [
  AppComponent,
  TodoComponent,
  HeaderComponent
],
imports: [
  BrowserModule,
  FormsModule
],
// permets de rendre dispo d'autres services
providers: [
  [TodoService]
],
bootstrap: [
  AppComponent
]
})

export class AppModule{}
