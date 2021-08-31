import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'drive'
})
export class DrivePipe implements PipeTransform {

  base: string = "https://drive.google.com/uc?export=view&id=/"

  constructor() {}
  transform(id: string): SafeResourceUrl {
    return this.base + id;
  }

}
