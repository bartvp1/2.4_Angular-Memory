import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-timer',
  templateUrl: './game-timer.component.html',
  styles: [`
    button {
      background: darkseagreen;
      width: 100%;
      height: 20px;
      padding:1px;
      outline:none;
      border:none;
  }
  button div {
    background: darkgreen;
    width:100%;
    height:100%;
  }
  `]
})
export class GameTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
