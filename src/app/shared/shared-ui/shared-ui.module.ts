import { PrimengModule } from './primeng.module';
import { ToastComponent } from './toast/toast.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[ToastComponent]
})
export class SharedUiModule { }
