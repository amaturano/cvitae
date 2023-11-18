import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorService } from '../../services/colors.service';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.scss']
})
export class CardGeneratorComponent implements OnInit {
  @Input() title :string = "Default title";
  @Input() subtitle:string = "Default subtitle";
  @Input() description:string = "Default description container";
  @Input() actionButtons:any = [];
  @ViewChild('cardContainer', {static:true, read:ElementRef}) private mainContainer?:ElementRef;
  @ViewChild('cardTitle', {static:true, read:ElementRef}) private cardTitle?:ElementRef;
  @ViewChild('cardSubtitle', {static:true, read:ElementRef}) private cardSubTitle?:ElementRef;
  @ViewChild('cardDescription', {static:true, read:ElementRef}) private cardDescription?:ElementRef;
  //@ViewChild('cardButton', {static:true, read:ElementRef}) private cardButton?:ElementRef;
  styleHandler$:BehaviorSubject<any> = new BehaviorSubject<any>(""); 
  style$:Observable<any> = this.styleHandler$;
 
  constructor(
    private _colorService:ColorService
  ){}

  ngOnInit(): void {
    //console.log(this.cardButton);

    this._colorService.getColors$().subscribe(
      colors => {
        this.mainContainer?.nativeElement.setAttribute("style", `background-color:${colors.backgroundDocument}`);
        this.cardTitle?.nativeElement.setAttribute('style', `color:${colors.titles}`);
        this.cardSubTitle?.nativeElement.setAttribute('style', `color:${colors.subtitles}`);
        this.cardDescription?.nativeElement.setAttribute('style', `color:${colors.texts}`);
        //this.cardButton?.nativeElement.setAttribute('style', `color:${colors.buttons}`);
        this.styleHandler$.next({'background-color': `${colors.buttons}`});
      }
    )
  }

}
