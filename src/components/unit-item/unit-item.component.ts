import { Component, OnInit, Input } from '@angular/core';
import { Unit } from 'src/models/unit.model';

@Component({
  selector: 'app-unit-item',
  templateUrl: './unit-item.component.html',
  styleUrls: ['./unit-item.component.scss']
})
export class UnitItemComponent implements OnInit {

  @Input() unit: Unit;

  constructor() { }

  ngOnInit(): void {
  }

}
