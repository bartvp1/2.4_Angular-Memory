import {Component, OnInit, ViewChildren} from '@angular/core';
import {DataService} from "../../data.service";
import {CellComponent} from "../cell/cell.component";

@Component({
  selector: 'app-board',
  template: '<app-cell [style.width.px]="cell_size" [style.height.px]="cell_size" #cellComponent *ngFor=\"let i of num_cells\"></app-cell>',
  styles: []

})

export class BoardComponent implements OnInit {
  constructor(private dataService:DataService){ }
  cell_size:number;
  num_cells:number[];
  @ViewChildren('cellComponent') cells;

  ngOnInit(): void {
    this.num_cells = new Array(DataService.boardSize**2)
    this.cell_size = 400/DataService.boardSize;
  }
  reCell(): void {
    this.ngOnInit();
    this.dataService.ngOnInit()
    CellComponent.idx = 0;
    DataService.letterArray = DataService.shuffle("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".substring(0,DataService.boardSize**2).split(''))
    this.cells.forEach(e => {e.ngOnInit()})
  }

}
