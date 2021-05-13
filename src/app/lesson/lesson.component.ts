import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Unit } from 'src/models/unit.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})


export class LessonComponent implements OnInit {

  id: number = -1;
  title: string = "";

  titles: Array<{ id: number, value: string }> = [
    { id: 0, value: "English" },
    { id: 1, value: "Espanol" },
    { id: 2, value: "Excel" },
    { id: 3, value: "Réseaux sociaux" }
  ];

  units: Array<Unit> = [
    { id: 0, img: "assets/img/logo.png", label: "Nice to meet you", index: 1, finished: true },
    { id: 1, img: "assets/img/logo.png", label: "On holiday", index: 2, finished: false },
    { id: 2, img: "assets/img/logo.png", label: "At the restaurant", index: 3, finished: false },
    { id: 3, img: "assets/img/logo.png", label: "Jobs", index: 4, finished: false },
];


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
