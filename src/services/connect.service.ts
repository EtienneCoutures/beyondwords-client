import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { env } from 'src/environments/';
import { User } from 'src/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: HttpClient) {

   }

   public login(email: string, password: string): Observable<any> {
    return this.http.post<User>(env.api + '/login', {email: email, password: password}).pipe(
      catchError(err => {
        console.log("error connect : ", err)
        return err
      })
    )}
}
