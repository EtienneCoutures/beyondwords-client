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
    { id: 0, index: 1, title: "English", label: "", img: "assets/img/logo.png", progression: 0, eval_intro: "", eval_mid: ""},
    { id: 1, index: 2, title: "Espanol", label: "", img: "assets/img/logo.png", progression: 40, eval_intro: "", eval_mid: ""},
    { id: 2, index: 3, title: "Excel", label: "", img: "assets/img/logo.png", progression: 100, eval_intro: "", eval_mid: ""},
    { id: 3, index: 4, title: "Réseaux sociaux", label: "", img: "assets/img/logo.png", progression: 100, eval_intro: "", eval_mid: ""},
    { id: 4, index: 5, title: "Autre", label: "", img: "assets/img/logo.png", progression: 0, eval_intro: "", eval_mid: ""},
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
