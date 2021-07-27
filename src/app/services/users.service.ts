import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor() { }

  addUser(user: User): void {
    this.users.push(user);
  }
}
