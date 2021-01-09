import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  emptyHeart: string = '/assets/images/coracao_vazio.png'
  filledHeart: string = '/assets/images/coracao_cheio.png'

  constructor() { }

  ngOnInit(): void {
  }

}
