import { Component, OnInit, Input} from '@angular/core';
import { Categorie } from 'src/models/categorie.model';
import { HelperService } from '../../services/helper.service';
import { baseUrl } from 'src/environments/drive';
import { template } from 'underscore';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.scss']
})
export class CategorieItemComponent implements OnInit {
  @Input() categorie: Categorie;
  @Input() locked?: boolean;
  @Input() finished?: boolean;

  baseUrl: string = baseUrl;
  
  constructor(
    private helper: HelperService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    return this.locked ? this.dialog.open(LockedMessage) : this.helper.goToPage('/lesson/{{categorie.id}}'); 
  }

}

@Component({
  selector: 'locked-message',
  templateUrl: 'locked-message.html'
})
export class LockedMessage {}
