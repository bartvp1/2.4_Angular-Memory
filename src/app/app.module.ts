import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GameboardModule} from "./gameboard/gameboard.module";
import {SidepanelModule} from "./sidepanel/sidepanel.module";
import {HeaderModule} from "./header/header.module";
import {DataService} from "./data.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GameboardModule,
    SidepanelModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
