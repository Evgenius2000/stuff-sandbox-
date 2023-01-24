import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SlideMenuModule } from 'primeng/slidemenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    SlideMenuModule,
    OverlayPanelModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    FileUploadModule,
    InputNumberModule,
    ToastModule,
    ConfirmDialogModule,
    CheckboxModule
  ],
  exports:[
    TableModule, 
    SlideMenuModule, 
    OverlayPanelModule, 
    DialogModule, 
    InputTextModule, 
    ButtonModule, 
    FileUploadModule, 
    InputNumberModule,
    ToastModule, 
    ConfirmDialogModule,
    CheckboxModule]
})
export class PrimengModule { }
