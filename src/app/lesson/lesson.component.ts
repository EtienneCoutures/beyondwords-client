import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  id: number = -1;
  title: string;

  titles: Array<{ id: number, value: string }> = [
    { id: 1, value: "English" },
    { id: 2, value: "Espanol" },
    { id: 3, value: "Excel" },
    { id: 4, value: "Réseaux sociaux" }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.titles.forEach(title => {
      if (title.id === this.id)
        this.title = title.value;
    })
    if (!this.title){
      this.router.navigateByUrl('/404')
    }
  }

}
