import { Component } from '@angular/core';
import {StringService} from './services/strings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cvitae';
  constructor(
    private _stringService:StringService
  ){
    this._stringService.language = "Spanish";
  }
  
}
