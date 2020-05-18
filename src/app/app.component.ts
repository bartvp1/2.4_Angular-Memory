import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {BoardComponent} from "./gameboard/board/board.component";
import {DataService} from "./data.service";
import {Subject} from "rxjs";

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styles: [`b {font-size: 20px}`]
})


export class AppComponent{
  title = 'Angular Memory';

  @ViewChild(BoardComponent) board;

  newGame(): void {
    //let b = new BoardComponent();
    //b.ngOnInit();
    //this.board.ngOnInit()
    this.board.reCell()
    this.board.num_cells = new Array(DataService.boardSize**2)
    console.log(this.board)
  }
}
