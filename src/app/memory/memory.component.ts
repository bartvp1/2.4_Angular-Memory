import {
  Component,
  ViewChild
} from '@angular/core';
import {BoardComponent} from "./gameboard/board/board.component";
import {DataService} from "./data.service";

@Component({
  selector: 'memory',
  templateUrl: './memory.component.html',
  styles: [`b {font-size: 20px}`]
})


export class MemoryComponent{
  title = 'Angular Memory';

  @ViewChild(BoardComponent) board;

  newGame(): void {
    this.board.reCell()
    this.board.num_cells = new Array(DataService.boardSize**2)
  }
}
