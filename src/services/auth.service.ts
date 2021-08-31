import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserCoreService } from './user-core.service';

interface Path {
  name: string;
  auth: boolean;
} 

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate {

  paths: Array<Path> = [
    {name: 'signin', auth: false}, 
    {name: '', auth: true}, 
  ]

  constructor(
    public userCoreService: UserCoreService,
    public route: Router
  ) { }

  isAllowed(url: string): boolean {
    let auth = this.userCoreService.isAuth();
    let permission = this.paths.find(path => {
      return "/" + path.name === url
    })
    return auth === permission?.auth;
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAllowed(state.url))
      return true;
    this.route.navigate(['signin']);
    return false;
  }
}
