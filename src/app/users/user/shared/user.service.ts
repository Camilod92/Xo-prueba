
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API=`https://reqres.in/api/users;`;

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get<any>(this.URL_API)
    
  }
}
