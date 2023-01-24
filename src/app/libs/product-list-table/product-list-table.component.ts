import { Product } from './../../core/interface/product';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListTableComponent implements OnChanges{

  @Input() dataGrid: Product[] = [];
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();
  @Output() favofite = new EventEmitter<number>();

  onEdit(product: Product){
    this.edit.emit(product);
  }

  onDelete(product: Product){
    this.delete.emit(product);
  }
  onFavorite(row: Product, favorite: boolean){
    row.favorite = favorite;
    this.favofite.emit(row.id)// todo remove or refactor
  }

  ngOnChanges(){

  }

}
