import { Component, OnInit, Input} from '@angular/core';
import { Categorie } from 'src/models/categorie.model';
import { baseUrl } from 'src/environments/drive';

@Component({
  selector: 'categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.scss']
})
export class CategorieItemComponent implements OnInit {
  @Input() categorie: Categorie;
  baseUrl: string = baseUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}

