import { Component, ElementRef, ViewChild } from '@angular/core';
import { map, skipWhile } from 'rxjs';
import { ColorService } from '../../services/colors.service';
import {StringService} from '../../services/strings.service';

@Component({
  selector: 'app-header-tool-bar',
  templateUrl: './header-tool-bar.component.html',
  styleUrls: ['./header-tool-bar.component.scss']
})
export class HeaderToolBarComponent {
    @ViewChild('mainToolBar', {static:true, read:ElementRef}) toolBar?:ElementRef;
    @ViewChild('titleBar', {static:true, read:ElementRef}) titleBar?:ElementRef;
    title:string = "";
    private readonly  componentName:string = "HeaderToolBarComponent";

    constructor(
      private _colorService:ColorService,
      private _stringService:StringService
    ){}
    
    ngOnInit() {
      this._colorService.getColors$().subscribe(colors => {
        this.toolBar?.nativeElement.setAttribute("style", `background-color:${colors.primaryColor}`);
        this.titleBar?.nativeElement.setAttribute('style', `color:${colors.titles}`);
      })
     
      this._stringService.stringsText$.pipe(
        skipWhile((strings:any) => !strings.components),
        map((strings:any)=>strings.components),
        map((componentStrings:any)=>componentStrings[this.componentName])
      ).subscribe(strings => {
        this.title = strings.title
      });
       setTimeout(()=>(this._stringService.language = "English"), 3000);
    }

    onToggleChange(value:any){
      if(!value.checked){
        this._colorService.theme = "light";
        return;
      }
      this._colorService.theme = "dark";
    }

}
