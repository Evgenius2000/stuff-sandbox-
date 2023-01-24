import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[HttpService]
})
export class CoreModule { }
