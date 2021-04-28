import { Component, OnInit, Input} from '@angular/core';
import { Categorie } from 'src/models/categorie.model';

@Component({
  selector: 'categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.scss']
})
export class CategorieItemComponent implements OnInit {
  @Input() categorie: Categorie;

  constructor() { }

  ngOnInit(): void {
  }

}

