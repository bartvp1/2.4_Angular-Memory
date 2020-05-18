import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styles:[`span {display: block;margin:10px 0}`]
})
export class StatusComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
