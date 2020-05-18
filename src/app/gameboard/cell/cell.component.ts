import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-cell',
  template: `<span>{{ class == "active" ? value:this.dataService.character}}</span>`,
  styles: [],
})

export class CellComponent implements OnInit{
  constructor(public dataService: DataService) {}

  public value:string;

  ngOnInit(): void {
    this.value = CellComponent.nextletter(DataService.boardSize).apply('')
  }

  @HostBinding('class') class = 'inactive';

  @HostListener("click") function() {
    //TODO: notify app-board & dataService
    this.dataService.cellClicked(this)
  }

  // knuth array shuffle
  // from https://bost.ocks.org/mike/shuffle/
  private static shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  private static nextletter(size){
    let letterArray = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".substring(0,size*size).split('');
    let idx=0;
    letterArray=CellComponent.shuffle(letterArray);
    return function() {
      return letterArray[idx++];
    }
  }

}
