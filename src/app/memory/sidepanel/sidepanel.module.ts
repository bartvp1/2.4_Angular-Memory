import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopscoresComponent} from "./topscores/topscores.component";
import {UserVariablesComponent} from "./user-variables/user-variables.component";
import {ColorChangerComponent} from "./color-changer/color-changer.component";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";
import {ColorPickerModule} from "ngx-color-picker";


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
        FormsModule,
        MatCardModule,
        MatChipsModule,
        MatButtonModule,
        ColorPickerModule
    ]
})
export class SidepanelModule { }
