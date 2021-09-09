import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitContent } from 'src/models/unit-content.model';
import { Unit } from 'src/models/unit.model';
import { UnitService } from 'src/services/unit.service';
import { sample } from 'underscore'; 

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})

export class UnitComponent implements OnInit {
  id: number = -1;
  unit: Unit = <Unit>{}
  url: string;


  types: Array<string> = [
    "video",
    "pdf",
    "quizz"
  ]

  type: string = "";

  contents: Array<UnitContent> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unitService: UnitService
  ) { }

  displayContent(content: UnitContent) {
    this.type = content.type; 
    this.url = content.url;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('l_id'));
    if (this.id === -1){
      this.router.navigateByUrl('/404')
    }
    this.unitService.getUnit(this.id).subscribe(rep => {
      this.unit = rep;  
    }, err => {
      console.log('error component dashboard :', err)
    });
   
   
  }

}
