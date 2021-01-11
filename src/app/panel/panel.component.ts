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
  public answer: string =''
  public instruction: string = 'Traduza a frase'

  constructor() { console.log(this.phrases)}

  ngOnInit(): void {
  }

  refreshAnswer(answer: Event): void{
    this.answer=((<HTMLInputElement>answer.target).value)
    console.log(this.answer)
  }

}
