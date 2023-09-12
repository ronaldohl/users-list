import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FiltersForm, User, UserFilterKey } from '../interfaces/user.interface';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl:string = enviroment.baseURL

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl)
  }

  searchUsers(query:string){
    return this.httpClient.get<User[]>(this.baseUrl)
      .pipe(
        map((users)=>{
          let usersFilter = users.filter(item=>{
            return (item.name.includes(query) || item.email.includes(query))
          })
          return usersFilter
        })
      )
  }

  getUsersFiltered(filters:FiltersForm){
    if(!filters.order && filters.orderBy && filters.order){
      return this.getUsers()
    }
    return this.httpClient.get<User[]>(this.baseUrl).pipe(
      map(users=>{
        let usersFiltered:User[] = users;
        if(filters.query.length>0){
          usersFiltered = users.filter(item=>{
            return (item.name.includes(filters.query) || item.email.includes(filters.query))
          })
        }
        if(filters.orderBy){
          let orderByValue:UserFilterKey = filters.orderBy as UserFilterKey;
          
          usersFiltered.sort(
            (a,b) => a[orderByValue].localeCompare(b[orderByValue])
          )
        }

        if(filters.order == 'DESC'){
          users.reverse()
        }
        
        return usersFiltered



      })
    )
  }

}
