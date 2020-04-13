import { Component, OnInit } from '@angular/core';
import { Card } from '../Card';
import { CardSet } from '../Cardset';
import {CardService} from '../card.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css']
})
export class ViewSubjectComponent implements OnInit {
  constructor(private cardService : CardService) { }
  tempCard : Card[] = [];
  cardSet : CardSet;
  getCards() {
    return this.cardService.getMyCreatedSets();
  }
  displayQuestion(index : number) {
     this.tempCard[index].question;
  }
  displayAnswer(index : number) {
    this.tempCard[index].answer;
  }
  OpenSubject(index : number) {
    this.cardSet = this.cardService[index];
    this.tempCard = this.cardSet.Card;
  }
  ngOnInit() {
  }

}