import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type ToastType = 'success' | 'warn' | 'info' | 'error';

interface ToastMessage {
  type: ToastType;
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastMessage$: BehaviorSubject<ToastMessage | null> =
    new BehaviorSubject<ToastMessage | null>(null);

  constructor() {}

  getMessage(): Observable<ToastMessage | null> {
    return this.toastMessage$;
  }

  sendMessage(type: ToastType, title: string, message?: string) {
    this.toastMessage$.next({
      type: type,
      title: title,
      message: message || '',
    });
  }
}
