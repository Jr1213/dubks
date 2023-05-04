import { Injectable } from '@angular/core';
import { Lang } from '../interfaces/lang';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  constructor() {}

  lang(): string {
    return localStorage.getItem('lang') || 'en';
  }

  setLang(lang: string): void {
    localStorage.setItem('lang', lang);
  }

  languges(): Lang[] {
    return [
      {
        name: 'english',
        prefix: 'en',
      },
      {
        name: 'العربية',
        prefix: 'ar',
      },
    ];
  }
}
