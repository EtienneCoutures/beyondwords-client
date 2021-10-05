import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnitContent } from 'src/models/unit-content.model';
import { Unit } from 'src/models/unit.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { env } from 'src/environments/';


@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }


  public getUnit(id: number): Observable<any> {
    return this.http.get<Array<Unit>>(env.api + '/unit/' + id).pipe(
      catchError(err => {
        console.log("error unit : ", err)
        return err
      })
    )}


  public getUnitContents(id: number): Observable<any> {
    return this.http.get<Array<UnitContent>>(env.api + '/unit/' + id + '/courses').pipe(
      catchError(err => {
        console.log("error unitContent : ", err)
        return err
      })
    )}
}
