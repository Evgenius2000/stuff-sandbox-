import { ProductListDataService } from './data-services/product-list-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  providers:[ProductListDataService]
})
export class DataAccessModule { }
