import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  users = [
    {name: 'John', status: 'active'},
    {name: 'Mark', status: 'inactive'},
    {name: 'Steve', status: 'active'}
  ]

  AddUser(name: string, status: string){
    this.users.push({name: name, status: status});
  }

}
