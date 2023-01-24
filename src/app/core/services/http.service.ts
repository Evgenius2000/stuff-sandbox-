import { ToastService } from './toast.service';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private toastService: ToastService) {}

  httpRequestGet(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`).pipe(
      catchError((err) => {
        this.toastService.sendMessage(
          'error',
          'HTTP Request Error',
          err.message
        );
        return [];
      })
    );
  }

  httpRequestPut(url: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, data).pipe(
      catchError((err) => {
        this.toastService.sendMessage(
          'error',
          'HTTP Request Error',
          err.message
        );
        return [];
      })
    );
  }

  httpRequestPatch(url: string, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}${url}`, data).pipe(
      catchError((err) => {
        this.toastService.sendMessage(
          'error',
          'HTTP Request Error',
          err.message
        );
        return [];
      })
    );
  }

  httpRequestPost(url: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, data).pipe(
      catchError((err) => {
        this.toastService.sendMessage(
          'error',
          'HTTP Request Error',
          err.message
        );
        return [];
      })
    );
  }

  httpRequestDelete(url: string, id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}/${id}`).pipe(
      catchError((err) => {
        this.toastService.sendMessage(
          'error',
          'HTTP Request Error',
          err.message
        );
        return [];
      })
    );
  }
}
