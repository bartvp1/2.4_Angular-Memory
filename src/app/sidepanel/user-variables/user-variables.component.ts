import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-user-variables',
  templateUrl: './user-variables.component.html',
  styles: []
})

export class UserVariablesComponent implements OnInit {
  constructor(public dataService:DataService) { }
  ngOnInit(): void { }

  update_character(event): void {
    this.dataService.character = event.target.value;
  }
  update_size(event) : void {
    let num = event.target.value;
    if(num <= 10 && num >= 0) DataService.boardSize = num;
  }
  newGame() : void {
    console.log('new game');
  }

}
