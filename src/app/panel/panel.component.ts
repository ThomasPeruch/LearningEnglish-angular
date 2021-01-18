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

  public round: number = 0
  public phraseRound: Phrase

  constructor() { 
    this.phraseRound = this.phrases[this.round]
  }

  ngOnInit(): void {
  }

  refreshAnswer(answer: Event): void{
    this.answer=((<HTMLInputElement>answer.target).value)
  }

  verifyAnswer(){
    if(this.phraseRound.phrasePtBr == this.answer){
      alert('Tradução correta')
      this.round++
      this.phraseRound = this.phrases[this.round]
    }else{
      alert('Tradução errada')
    }

  }

}
