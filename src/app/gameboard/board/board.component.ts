import {Component, HostBinding, OnInit} from '@angular/core';
import {DataService} from "../../data.service";


let cell_size = 400/DataService.boardSize;
@Component({
  selector: 'app-board',
  template: '<app-cell *ngFor=\"let i of num_cells\"></app-cell>',
  styles: [`
  app-cell {
    width: `+cell_size+`px;
    height: `+cell_size+`px;
  }`]

})

export class BoardComponent implements OnInit {
  constructor(){ }
  num_cells:number[];
  ngOnInit(): void {
    this.num_cells = new Array(DataService.boardSize*DataService.boardSize);
  }


}
