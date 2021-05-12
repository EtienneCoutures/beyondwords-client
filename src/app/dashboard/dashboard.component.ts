import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/models/categorie.model';

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

  categories: Array<Categorie> = [
    { id: 1, title: "English", img: "assets/img/logo.png", progression: 0 },
    { id: 2, title: "Espanol", img: "assets/img/logo.png", progression: 40 },
    { id: 3, title: "Excel", img: "assets/img/logo.png", progression: 100},
    { id: 4, title: "Réseaux sociaux", img: "assets/img/logo.png", progression: 100 },
    { id: 5, title: "Autre", img: "assets/img/logo.png", progression: 0 },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
