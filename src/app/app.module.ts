import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from "./app.component";
import {MemoryModule} from "./memory/memory.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MemoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
