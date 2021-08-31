import { Component, OnInit, Input } from '@angular/core';
import { Unit } from 'src/models/unit.model';
import { baseUrl } from 'src/environments/drive';

@Component({
  selector: 'unit-item',
  templateUrl: './unit-item.component.html',
  styleUrls: ['./unit-item.component.scss']
})
export class UnitItemComponent implements OnInit {

  @Input() unit: Unit;
  @Input() number: number;

  baseUrl: string = baseUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
