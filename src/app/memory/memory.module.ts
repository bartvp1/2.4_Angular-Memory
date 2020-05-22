import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MemoryComponent} from './memory.component';
import {GameboardModule} from "./gameboard/gameboard.module";
import {SidepanelModule} from "./sidepanel/sidepanel.module";
import {HeaderModule} from "./header/header.module";
import {DataService} from "./data.service";


@NgModule({
  declarations: [
    MemoryComponent,
  ],
  imports: [
    BrowserModule,
    GameboardModule,
    SidepanelModule,
    HeaderModule
  ],
  exports: [
    GameboardModule,
    SidepanelModule,
    HeaderModule,
    MemoryComponent
  ]
})
export class MemoryModule {
}
