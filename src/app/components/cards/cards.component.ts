import { Component } from '@angular/core';
import { map, Observable, of, skipWhile } from 'rxjs';
import { MockDataJsService } from '../../services/mock-data.js.service';
import { StringService } from '../../services/strings.service'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-cards-component',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  private readonly componentName = "CardsComponent";
  private isWeb$: Observable<boolean> = of(false);

  data: Observable<Array<any>> = of([]);

  constructor(
    private _mockService: MockDataJsService,
    private _stringService: StringService,
    private _layout: BreakpointObserver
  ) { }

  ngOnInit() {
    //this.data = of(this._mockService.getData().cards);
    this._layout.observe([
      Breakpoints.Web,
      Breakpoints.Tablet,
      Breakpoints.Handset
    ]).subscribe(({ matches, breakpoints }) => {

      if (!matches)
        console.log(`UNCOVER DEVICE !!`);

      if (breakpoints[Breakpoints.WebLandscape])
        console.log(`This is a WEB Landscape!`);

      if (breakpoints[Breakpoints.WebPortrait])
        console.log(`This is a WEB Portrait!`);

      if (breakpoints[Breakpoints.TabletLandscape])
        console.log(`This is a TABLET Landscape!`);

      if (breakpoints[Breakpoints.TabletPortrait])
        console.log(`This is a TABLET! Portrait`);

      if (breakpoints[Breakpoints.HandsetLandscape])
        console.log(`This is a Phone Landscape`);

      if (breakpoints[Breakpoints.HandsetPortrait])
        console.log(`This is a Phone Portrait`);


    })

    this._stringService.stringsText$.pipe(
      skipWhile((strings: any) => !strings.components),
      map((strings: any) => strings.components),
      map((strings: any) => strings[this.componentName])
    ).subscribe(cards => {
      this.data = of(cards);
    })

  }
}
