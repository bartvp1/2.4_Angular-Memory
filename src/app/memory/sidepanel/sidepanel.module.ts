import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopscoresComponent} from "./topscores/topscores.component";
import {UserVariablesComponent} from "./user-variables/user-variables.component";
import {ColorChangerComponent} from "./color-changer/color-changer.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TopscoresComponent,
    UserVariablesComponent,
    ColorChangerComponent
  ],
  exports: [
    TopscoresComponent,
    UserVariablesComponent,
    ColorChangerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SidepanelModule { }
