import { Component, OnInit } from '@angular/core';
import { Phrase } from "../shared/phrase.model";
import { phrases } from "./phrases-mock";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public phrases: Phrase[] = phrases

  constructor() { console.log(this.phrases)}

  ngOnInit(): void {
  }

}
