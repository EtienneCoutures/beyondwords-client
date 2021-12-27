import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/models/categorie.model';
import { Tag } from 'src/models/tag.model';
import { UserCoreService } from 'src/services/user-core.service';
import { CategorieService } from 'src/services/categorie.service';
import { Tagcats } from 'src/models/tagcats.model';

export interface courses {
  id: number,
  title: string,
  img: string,
  progression: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  tags: Array<Tag> = [];
  tagCats: Array<Tagcats> = [];
  filter: number = 0;
  categories: Array<Categorie> = [];
  others: Array<Categorie> = [];


  constructor(
    public userCoreService: UserCoreService,
    private categorieService: CategorieService
  ) {
    this.userCoreService.getUserCategories().subscribe(rep => {
      console.log("cat : ", rep)
      this.categories = rep;
    }, err => {
      console.log('error component dashboard :', err)
    });
    this.userCoreService.getOthersCategories().subscribe(rep => {
      this.others = rep;
    }, err => {
      console.log('error component dashboard :', err)
    });
    this.categorieService.getTags().subscribe(rep => {
      this.tags = rep;
      console.log("tags :", rep)
    }, err => {
      console.log('error component dashboard :', err)
    });
  }
  
  async ngOnInit(): Promise<void> {
  }

  selectTag(id: number): void {
    this.filter = (this.filter == id ? 0 : id);
    console.log("filter : ", this.filter)
  }

}
