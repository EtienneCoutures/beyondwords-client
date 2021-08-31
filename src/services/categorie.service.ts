import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from 'src/models/unit.model';
import { catchError } from 'rxjs/operators';
import { env } from 'src/environments/';
import { Categorie } from 'src/models/categorie.model';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }


  public getCat(id: number): Observable<any> {
    console.log("l'id : ", id)
    return this.http.get<Array<Categorie>>(env.api + '/categories/' + id).pipe(
      catchError(err => {
        console.log("error user : ", err)
        return err
      })
    )}


  public getCatUnits(id: number): Observable<any> {
    return this.http.get<Array<Unit>>(env.api + '/categories/' + id + '/units').pipe(
      catchError(err => {
        console.log("error user : ", err)
        return err
      })
    )}

   
}
