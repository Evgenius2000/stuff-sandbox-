import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  baseUrl = 'https://backend-for-applicants.smartoneclub.com/'; //todo move to config const

  constructor() {}
  getImageURL(url: string | null | undefined): string | null {
    if (!url) return null;
    return `${this.baseUrl.substring(0, this.baseUrl.length - 1)}${url}`;
  }
}
