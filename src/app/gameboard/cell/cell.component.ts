import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-cell',
  template: `<span>{{ class == "inactive" ? this.dataService.character:value}}</span>`,
  styles: [],
})

export class CellComponent implements OnInit{
  constructor(public dataService: DataService) { }

  public value:string
  static idx:number = 0;

  ngOnInit(): void {
    this.value = DataService.letterArray[CellComponent.idx++]
    this.class = 'inactive'
  }

  @HostBinding('class') class = 'inactive';

  @HostListener("click") function() {
    this.dataService.cellClicked(this)
  }
}
