import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../model/iuser';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: IUser[] = [];
  private errorMessage: any = '';
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.usersService.getData()
        .subscribe(
            users => this.users = users,
            error => this.errorMessage = <any>error);
  }
}