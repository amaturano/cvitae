import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ColorService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})
export class CoverageComponent implements OnInit {
 @ViewChild ('coverageContainer', {static:true, read:ElementRef}) private coverageContainer ?:ElementRef;

  constructor(
    private readonly _colors: ColorService
  ) { 

  }

  ngOnInit(): void {
    this._colors.getColors$().subscribe(
      colors => {
        this.coverageContainer?.nativeElement.setAttribute("style", `background-color:${colors.backgroundDocument}`);
      }
    )
  }

}
