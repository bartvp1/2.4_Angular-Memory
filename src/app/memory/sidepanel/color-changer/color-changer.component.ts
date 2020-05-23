import {
  Component, HostBinding, Input, OnInit
} from '@angular/core';
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
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

  valueChange(event:Event) : void {
    // @ts-ignore
    this.setColor(event.target.id, event.target.value)
  }
  setColor(id:string, color:string) : void {
    let cssVar = `--${id.substring(5)}`;
    document.documentElement.style.setProperty(cssVar,'#'+color);
    console.log(document.documentElement.style)
  }

}
