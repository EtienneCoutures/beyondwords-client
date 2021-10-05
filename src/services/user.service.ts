import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { env } from 'src/environments/';
import { Categorie } from 'src/models/categorie.model';
import { User } from 'src/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get<User>(env.api + '/users').pipe(
      catchError(err => {
        console.log("error getUsers : ", err)
        return err
      })
    )
  }


  public getCatByUserId(id: number): Observable<any> {
    return this.http.get<Categorie[]>(env.api + '/users/' + id + '/categories').pipe(map(result=> {
      console.log("result : ", result)
      return result;
    }),
      catchError(err => {
        console.log("error getCatByUserId : ", err)
        return err
      })
    )
  }

  public getOtherCatByUserId(id: number): Observable<any> {
    return this.http.get<Categorie[]>(env.api + '/users/' + id + '/others').pipe(map(result=> {
      console.log("result : ", result)
      return result;
    }),
      catchError(err => {
        console.log("error getCatByOthersId : ", err)
        return err
      })
    )
  }



}
