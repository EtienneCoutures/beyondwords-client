import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitContent } from 'src/models/unit-content.model';
import { Unit } from 'src/models/unit.model';
import { Content } from 'src/models/content.model';
import { UnitService } from 'src/services/unit.service';
import { ContentService } from 'src/services/content.service';
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
  type: string = "";

  contents: Array<Content> = [];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unitService: UnitService,
    private contentService: ContentService
  ) { }

  displayContent(content: UnitContent) {
    this.contentService.getContent(content.id).subscribe(rep => {
      console.log("rep ", rep)
      this.contents = rep.contents;
      console.log("courses : ",  this.contents)

    }, err => {
      console.log('error component courses :', err)
    });
  }

  ngOnInit(): void {
    console.log("ici")
    this.id = Number(this.route.snapshot.paramMap.get('l_id'));
    if (this.id === -1){
      this.router.navigateByUrl('/404')
    }
    this.unitService.getUnit(this.id).subscribe(rep => {
      console.log("unit : ", rep)
      this.unit = rep;  
    }, err => {
      console.log('error component dashboard :', err)
    });
   
   
  }

}
