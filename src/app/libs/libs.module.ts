import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../shared/shared-ui/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListTableComponent } from './product-list-table/product-list-table.component';
import { ProductFormComponent } from './product-form/product-form.component';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductListTableComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports:[ProductListComponent, ProductListTableComponent]
})
export class LibsModule { }
