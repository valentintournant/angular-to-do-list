import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
declarations: [
  AppComponent,
  TodoComponent,
  HeaderComponent
],
imports: [
  BrowserModule,
],
bootstrap: [
  AppComponent
]
})

export class AppModule{}
