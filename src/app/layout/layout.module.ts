import { BrowserModule } from '@angular/platform-browser';
import { LibsModule } from './../libs/libs.module';
import { PrimengModule } from '../shared/shared-ui/primeng.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsPageComponent } from './all-products-page/all-products-page.component';
import { SelectedProductsPageComponent } from './selected-products-page/selected-products-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SideBarComponent,
    AllProductsPageComponent,
    SelectedProductsPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    LibsModule,
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports:[SideBarComponent]
})
export class LayoutModule { }
