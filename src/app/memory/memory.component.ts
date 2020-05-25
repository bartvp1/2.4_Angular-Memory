import {
  Component,
  ViewChild
} from '@angular/core';
import {BoardComponent} from "./gameboard/board/board.component";
import {DataService} from "./data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'memory',
  templateUrl: './memory.component.html',
})


export class MemoryComponent {

  constructor(private router:Router) {
    if(!localStorage.getItem('currentUser')){
      router.navigate(['/login'])
    }
  }

  @ViewChild(BoardComponent) board;

  newGame(): void {
    this.board.reCell()
    this.board.num_cells = new Array(DataService.boardSize**2)
  }
}
