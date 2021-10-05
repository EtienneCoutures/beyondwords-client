import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { env } from 'src/environments/';
import { Content } from 'src/models/content.model';
import { UnitContent } from 'src/models/unit-content.model';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }


  public getContent(id: number): Observable<any> {
    return this.http.get<UnitContent>(env.api + '/courses/' + id).pipe(
      catchError(err => {
        console.log("error content : ", err)
        return err
      })
    )}
}
