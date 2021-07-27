import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.models';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[] | any;

  usersSubscription: Subscription | any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.usersSub.subscribe(
      (usersRecup: User[])=> {
        this.users = usersRecup;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

}
