import { Component, OnInit, Input } from '@angular/core';
import { UnitContent } from 'src/models/unit-content.model';

@Component({
  selector: 'unit-content-item',
  templateUrl: './unit-content-item.component.html',
  styleUrls: ['./unit-content-item.component.scss']
})
export class UnitContentItemComponent implements OnInit {
 
  @Input() unit_content: UnitContent;

  constructor() { }

  ngOnInit(): void {
  }

}
