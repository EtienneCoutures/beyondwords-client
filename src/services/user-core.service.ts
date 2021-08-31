import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { Categorie } from 'src/models/categorie.model';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserCoreService {
  public static empty = new User();
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private userService: UserService,
    private http: HttpClient
  ) {

  }

  public isAuth(): boolean {
    return this.userSubject?.value ? true : false;
  }

  public setUser(user: User): void {
    this.userSubject = new BehaviorSubject<User>(user);
    this.user = this.userSubject.asObservable();
  }

  public getUser(): User {
    return this.userSubject?.value;
  }

  public logout(): void {
    this.userSubject.next(UserCoreService.empty);
    this.router.navigate(['/signin']);
  }

  public getUserLastname(): string {
    return this.userSubject?.value.lastname;
  }

  public getUserFirstname(): string {
    return this.userSubject?.value.firstname;
  }

  public getUserId(): number {
    return this.userSubject?.value.id;
  }

  public getUserFullname(): string {
    return `${this.getUserFirstname()} ${this.getUserLastname()}`
  }

  public getUserCategories(): Observable<any> {
    return this.userService.getCatByUserId(this.getUserId());
  }

}
