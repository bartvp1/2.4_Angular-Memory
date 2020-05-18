import {Injectable, OnInit} from '@angular/core';
import {CellComponent} from "./gameboard/cell/cell.component";

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit{
  static boardSize:number = 6;
  character:string = '*';
  start_time:number;
  elapsed_time:number = 0;
  pairs_found:number = 0;
  average_time:number = 0;
  average_time_added:number = 0;
  times_played:number = 0;
  total_time:number = 0;
  hasStarted:boolean = false;
  viewTime:number = 5000;
  intervalID;
  tijdID;
  firstCard:CellComponent = null;
  secondCard:CellComponent = null;

  ngOnInit(): void {
    //this.vulSpeelveld(this.boardSize);
    //this.showScores();
    //this.initValues(this.boardSize);

    // reset variables
    this.pairs_found = 0;
    this.hasStarted = false;
    this.start_time = 0;
    this.elapsed_time = 0;
    this.deactivateCards();
    clearTimeout(this.tijdID);
    clearTimeout(this.intervalID);

  }

  cellClicked(cell:CellComponent){
    console.log(cell.value)
    //if(cell.class == "active") cell.class = "inactive"
    //else cell.class = "active"

    if(!this.hasStarted) {
      this.start_time = this.getSeconds();
      this.start_timer();
      this.hasStarted = true;
    }
    //exclude found and active cards
    if(cell.class == "found") return;
    if(cell.class == "active"){
      this.deactivateCards();
      ////this.cellClicked(cell);
      return;
    }

    // clicked first card
    if(this.firstCard == null) {
      this.firstCard = cell;
      this.showCard(cell, true);
    }

    else {

      // clicked second card
      if (this.secondCard == null) {
        //console.log("set second card");
        this.secondCard = cell;
        this.showCard(cell,true);
        //cards are being checked...
        if(this.checkKaarten()) {
          this.deactivateCards();
          if(document.querySelectorAll(".inactive").length === 0) this.endGame();
        }
        else {
          this.intervalID = setInterval(function(){
            let width = parseInt(document.querySelector("#timeLeft")["style"].width.replace('%',''));
            width--;
            document.querySelector("#timeLeft")["style"].width = width+'%';

            if(width <= 0) {
              this.deactivateCards();
              document.querySelector("#timeLeft")["style"].width = '100%';
            }

          }, this.viewTime/100);
        }
      }
      // clicked third card
      else {
        //console.log("third card");
        this.deactivateCards();
        this.cellClicked(cell);
      }
    }
  }
  deactivateCards() : void {
    // Functie om de twee omgedraaide kaarten weer terug te draaien
    //console.log("deactivated cards");
    Array.prototype.forEach.call(document.querySelectorAll(".active"), e => {this.showCard(e,false)});
    this.firstCard = null;
    this.secondCard = null;
    clearTimeout(this.intervalID);
    document.querySelector("#timeLeft")["style"].width = '100%';
  }

  checkKaarten():boolean{
    if(this.firstCard.value === this.secondCard.value){
      this.firstCard.class = "found";
      this.secondCard.class = "found";
      this.firstCard = null;this.secondCard = null;
      this.pairs_found +=1;
      return true;
    }
    return false;
  }


  topScores = [
    {name:"Bernie Sanders", time:300},
    {name:"Donald Trump", time:600},
    {name:"Hillary Clinton", time:400},
    {name:"Jeb Bush", time:500},
    {name:"Barack Obama", time:200}
  ]


  sortTopScores(){
    this.topScores.sort(function (a,b) {
      if(a.time < b.time) return -1;
      if(a.time > b.time) return 1;
      return 0;
    });
    return this.topScores;
  }
  showCard(cell:CellComponent, boolean){
    if(boolean) cell.class = "active"
    else cell.class = "inactive"
  }


  getSeconds(){
    // get time in seconds
    return Math.round(new Date().getTime()/1000);
  }

  start_timer() : void {
    if (this.pairs_found==(DataService.boardSize*DataService.boardSize)/2) {
      this.endGame();
    } else {
      this.elapsed_time = this.getSeconds() - this.start_time;
      this.tijdID=setTimeout(()=>{this.start_timer();},500);
    }
  }

  endGame(){
    // Bepaal de speeltijd, chekc topscores en doe de overige
    // administratie.
    this.average_time = (this.total_time+this.elapsed_time)/(this.times_played+1);
    this.average_time_added = this.average_time;
    if(this.times_played > 0)  this.average_time_added = this.average_time - ((this.total_time)/this.times_played);

    clearTimeout(this.tijdID);
    let naam = prompt(`Congratulations! You completed the game in ${this.elapsed_time} seconds! \nPlease fill in a username:`,"pietje");
    this.addScore(naam, this.elapsed_time);

    this.total_time += this.elapsed_time;
    this.times_played += 1;

  }

  addScore(naam, speelTijd){
    // Voeg de aangeleverde speeltijd toe aal de lijst met topscores
    this.topScores.push({name: naam,time: speelTijd});

  }
}
