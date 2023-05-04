import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from 'src/app/interfaces/lang';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  //props
  langs: Lang[] = [];
  currentLang: string = this._langServices.lang();
  categories: string[] = [
    'موبايل',
    'لابتوب',
    'تلفزيون',
    'غسالة',
    'كونسول',
    'كاميرات',
    'ساعات',
    'اكسورات',
  ];
  //methods
  constructor(
    private _langServices: LangService,
    private _translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    console.log(this.langs, this.currentLang);
    this._translate.use(this.currentLang);
    this.langs = _langServices.languges();
    const htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    htmlTag.lang = this.currentLang;
  }
  setLang(lang: string): void {
    this._langServices.setLang(lang);
    const htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    htmlTag.lang = lang;
    this._translate.use(lang);
    this.currentLang = lang;
  }
  truncateString(val: string, length: number): string {
    if (val.length > length) {
      return val.substring(0, length) + '...';
    }
    return val;
  }
}
