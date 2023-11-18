import { Injectable } from '@angular/core';
import  cards from './../data/cards.json';
interface CardButton{
  title:string;
  link: string;
}
interface SimpleCard{
  title: string;
  image:string;
  subtitle:string;
  description:string;
  actionButtons: CardButton[]
};
interface DataMock {
  cards : SimpleCard[]
};

@Injectable({
  providedIn: 'root'
})

export class MockDataJsService {

  constructor() { 

  }

  getData():DataMock{
    return {
      cards
    };
  }
}
