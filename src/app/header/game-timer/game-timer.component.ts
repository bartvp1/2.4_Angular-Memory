import {Component} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-game-timer',
  template:'<div id="timeLeft"><div [style.width.%]="this.dataService.width"></div></div>',
  styles: [`
    div#timeLeft {
      background: darkseagreen;
      width: 100%;
      height: 20px;
      padding:1px;
      outline:none;
      border:none;
  }
  div#timeLeft div {
    background: darkgreen;
    /*width:100%;*/
    height:100%;
  }
  `]
})
export class GameTimerComponent {

  constructor(public dataService:DataService) { }

}
