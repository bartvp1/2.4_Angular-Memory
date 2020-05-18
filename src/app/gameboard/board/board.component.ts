import {AfterViewInit, Component, HostBinding, OnDestroy, OnInit, ViewChildren} from '@angular/core';
import {DataService} from "../../data.service";
import {CellComponent} from "../cell/cell.component";


let cell_size = 400/DataService.boardSize;
@Component({
  selector: 'app-board',
  template: '<app-cell #cellComponent *ngFor=\"let i of num_cells\"></app-cell>',
  styles: [`
  app-cell {
    width: `+cell_size+`px;
    height: `+cell_size+`px;
  }`]

})

export class BoardComponent implements OnInit {
  constructor(){ }

  num_cells:number[];
  @ViewChildren('cellComponent') cells;

  ngOnInit(): void {
    this.num_cells = new Array(DataService.boardSize**2)
  }
  reCell(): void {
    this.ngOnInit();
    CellComponent.idx = 0;
    DataService.letterArray = DataService.shuffle("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".substring(0,DataService.boardSize**2).split(''))
    this.cells.forEach(e => {e.ngOnInit()})
  }

}
