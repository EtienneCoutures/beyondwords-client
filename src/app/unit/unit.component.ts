import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitContent } from 'src/models/unit-content.model';
import { sample } from 'underscore'; 

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  id: number = -1;
  title: string = "";
  video: string = "https://www.youtube.com/embed/QU8RCsbWHMM";
  pdf: string = "https://codes.droit.org/PDF/Code%20civil.pdf";

  titles: Array<{ id: number, value: string }> = [
    { id: 0, value: "Nice to meet you" },
    { id: 1, value: "On holiday" },
    { id: 2, value: "At the restaurant" },
    { id: 3, value: "Jobs" }
  ];

  types: Array<string> = [
    "video",
    "pdf",
    "quizz"
  ]

  type: string = "";

  contents: Array<UnitContent> = [
    {id: 0, index: 1, label: "Grammaire"},
    {id: 1, index: 2, label: "Vocabulaire"},
    {id: 2, index: 3, label: "Compréhension"},
    {id: 3, index: 4, label: "Quizz"},
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  randomDisplay() {
    this.type = sample(this.types, 1).toString(); 
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('l_id'));
    if (this.id === -1){
      this.router.navigateByUrl('/404')
    }
    this.titles.forEach(title => {
      if (title.id === this.id)
        this.title = title.value;
    })
   
  }

}
