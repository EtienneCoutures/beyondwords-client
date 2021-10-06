import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Unit } from 'src/models/unit.model';
import { Categorie } from 'src/models/categorie.model';
import { CategorieService } from 'src/services/categorie.service';
import { baseUrl } from 'src/environments/drive';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})

export class LessonComponent implements OnInit {

  id: number = -1;
  title: string = "";
  categorie: Categorie = <Categorie>{};
  baseUrl: string = baseUrl;


  titles: Array<{ id: number, value: string }> = [
    { id: 0, value: "English" },
    { id: 1, value: "Espanol" },
    { id: 2, value: "Excel" },
    { id: 3, value: "Réseaux sociaux" }
  ];

  units: Array<Unit> =<Unit[]>[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categorieService: CategorieService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('l_id'));
    if (this.id < 0) {
      this.router.navigateByUrl('/404')
    }
    this.categorieService.getCat(this.id).subscribe(rep => {
      this.categorie = rep;
      this.units = this.categorie.Units;
      console.log("la cat : ", this.categorie)
      console.log("les units : ", this.categorie.Units)
    }, err => {
      console.log('error component dashboard :', err)
    });
  }

  ngOnInit(): void {

    this.titles.forEach(title => {
      if (title.id === this.id)
        this.title = title.value;
    })
  }

}
