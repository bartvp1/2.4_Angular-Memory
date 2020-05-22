import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-topscores',
  templateUrl: './topscores.component.html',
  styleUrls: ['./topscores.component.css']
})
export class TopscoresComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

}
