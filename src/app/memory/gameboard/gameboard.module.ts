import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [BoardComponent, CellComponent],
    exports: [
        BoardComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class GameboardModule { }
