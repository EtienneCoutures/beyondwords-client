import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  goBack(): void {
    this.location.back();
  }

  goToPage(wich: string, param?: any) {
    return this.router.navigateByUrl(`/${wich}`, { state: { param } });
  }

  addPathToUrl(nextPage: string, params?: Params) {
    return this.goToPage(`${this.router.url}/${nextPage}`, params);
  }
}
