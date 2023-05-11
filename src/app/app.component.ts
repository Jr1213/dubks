import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dubks';
  langs = [
    {prefix:'en',name:'English'},
    {prefix:'ar',name:'العربية'}
  ];


  constructor(
    private _translateService:TranslateService,
    protected _url:Router,
    @Inject(DOCUMENT) private document: Document
    ) {
    _translateService.setDefaultLang('en')
    _translateService.use('en')
    
  }

  setLang(e:any):void {
    const htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = e.target.value === "ar" ? "rtl" : "ltr";
    htmlTag.lang = e.target.value;
    this._translateService.use(e.target.value)
  }
}
