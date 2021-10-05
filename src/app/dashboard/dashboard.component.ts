import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/models/categorie.model';
import { UserCoreService } from 'src/services/user-core.service';

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

  filters: Array<string> = [
    "Langues",
    "Bureautique",
    "Digital",
    "Communication",
    "Certifications"
  ];

  categories: Array<Categorie> = [];
  others: Array<Categorie> = [];

  constructor(
    public userCoreService: UserCoreService
  ) { 
    this.userCoreService.getUserCategories().subscribe(rep => {
      this.categories = rep;
    }, err => {
      console.log('error component dashboard :', err)
    });

    this.userCoreService.getOthersCategories().subscribe(rep => {
      this.others = rep;
      console.log(this.others)
    }, err => {
      console.log('error component dashboard :', err)
    });
    
  }

  async ngOnInit(): Promise<void> { 
  }
}
