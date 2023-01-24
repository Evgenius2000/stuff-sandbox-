import { ToastService } from './../../../core/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService]
})
export class ToastComponent implements OnInit{

  toastMessage$ = this.toastService.getMessage()

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig, private toastService: ToastService){}
  
  ngOnInit() {
    this.primengConfig.ripple = true;    
    this.toastMessage$.subscribe(message => {
      this.messageService.add({severity:message?.type, summary: message?.title, detail: message?.message});
      setTimeout(() => {this.messageService.clear}, 4000)
    })
  }
}
