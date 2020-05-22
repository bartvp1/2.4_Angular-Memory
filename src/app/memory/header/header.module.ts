import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameTimerComponent} from "./game-timer/game-timer.component";
import { StatusComponent } from './status/status.component';



@NgModule({
  declarations: [
    GameTimerComponent,
    StatusComponent
  ],
    exports: [
        GameTimerComponent,
        StatusComponent
    ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
