import {Component, OnInit} from '@angular/core';
import {ColorPickerModule} from 'ngx-color-picker';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styles: [`
    label {width:80px;display:inline-block}
    input {border: 1px solid black;width:150px;}
  `]
})
export class ColorChangerComponent implements OnInit{
  constructor() {}

  found:string = '#800080';
  active:string = '#006400';
  inactive:string = '#32CD32';

  ngOnInit(): void {
    document.documentElement.style.setProperty('--active',this.active);
    document.documentElement.style.setProperty('--inactive',this.inactive);
    document.documentElement.style.setProperty('--found',this.found);
  }


  setColor(color:string, id:string) : void {
    document.documentElement.style.setProperty(`--${id}`,color);
  }

}
