import { Observable } from 'rxjs';
import { UserService } from './user/shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userdb:UserService) { }

allUsers:Object;


  ngOnInit() {
    this.getCharacters();
 
  }
getCharacters(){
 this.userdb.getAllUsers().subscribe(data =>{
  
   this.allUsers=data.data
  
 })
}
}
