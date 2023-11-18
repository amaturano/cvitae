import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import englishStrings from '../data/i18n/en.json';
import spanishString from '../data/i18n/es.json';

type LANGUAGES = 'Spanish' | 'English';

@Injectable({
    providedIn: 'root'
})

export class StringService{
    private stringHandler$:BehaviorSubject<JSON> = new BehaviorSubject({} as JSON);
    private strings$:Observable<JSON> = this.stringHandler$;
    private  _englishStrings:any;
    private _spanishStrings:any;
    private languageCode = (lang:LANGUAGES) => ({'Spanish':'es', 'English':'en'})[lang];
    
    constructor(){
        this._englishStrings = englishStrings;
        this._spanishStrings = spanishString;
    }
    
    set language(language:LANGUAGES){

        switch(language){
            case 'English':
                    this.stringHandler$.next(this._englishStrings);
                break;

            case 'Spanish':
                    this.stringHandler$.next(this._spanishStrings)
                break;
        }
    }

    get stringsText$():Observable<JSON>{
        return this.strings$;
    }

}