import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, skipWhile, tap } from "rxjs";
import availableThemes from '../data/themes.json';

 interface ThemeDetails {
    primaryColor:string;
    backgroundDocument: string;
    titles:string;
    subtitles:string;
    texts:string;
    warning:string;
    error:string;
    success:string;
    buttons: string;
}

interface JSON_THEMES {
    defaultSelection:string;
    dark:ThemeDetails,
    light:ThemeDetails
}

type MENU_THEMES =  "dark" | "light";

@Injectable({
    providedIn: 'root'
})

export class ColorService{

    private currentTheme$: BehaviorSubject<string> = new BehaviorSubject<string>("");
    private changeThemeDetection$:Observable<string> = this.currentTheme$;
    private jsonThemes:any = availableThemes;
    private themeDetails$: BehaviorSubject<ThemeDetails> = new BehaviorSubject<ThemeDetails>(<ThemeDetails>{});
    private colorListener$:Observable<ThemeDetails> = this.themeDetails$;

    constructor(){
        this.currentTheme$.next(this.jsonThemes.defaultSelection);
        this.themeDetails$.next(this.jsonThemes[this.jsonThemes.defaultSelection]);
        this.changeThemeDetection$.pipe(
            skipWhile(theme => theme === ""),
            map((theme:string):ThemeDetails => (this.jsonThemes[theme])),
            tap(theme => this.themeDetails$.next(theme))
        ).subscribe();
    }

    set theme(theme:MENU_THEMES){
        this.currentTheme$.next(theme);
    }

    getColors$():Observable<ThemeDetails>{
        return this.colorListener$
    }
}