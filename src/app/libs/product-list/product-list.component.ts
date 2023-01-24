import { Product } from './../../core/interface/product';
import { ToastService } from './../../core/services/toast.service';
import { MProduct } from './../../core/model/mproduct';
import { ProductListDataService } from '../../data-access/data-services/product-list-data.service';
import { Observable, catchError, pipe, of, map } from 'rxjs';
import { Component, OnChanges, Input } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

type FormMode = 'create' | 'edit';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ConfirmationService],
})
export class ProductListComponent implements OnChanges {
  @Input() favoriteMode?: boolean;
  productListDate$!: Observable<Product[]>;
  displayEditDialog: boolean = false;
  displayDeleteDialog: boolean = false;
  formData!: Product | null;
  editModalTitle: string = 'Create';
  formMode!: FormMode;
  favoriveLoacalArr: number[] = [];

  constructor(
    private productListDataService: ProductListDataService,
    private toastService: ToastService,
    private confirmationService: ConfirmationService
  ) {
    this.formData = new MProduct();
    this.favoriveLoacalArr = JSON.parse(
      localStorage.getItem('favorite') || '[]'
    );
  }

  ngOnChanges() {
    this.loadData();
  }

  loadData() {
    this.productListDate$ = this.favoriteMode
      ? this.productListDataService
          .getProductList()
          .pipe(map((data) => data.filter((item) => item.favorite === true)))
      : this.productListDataService.getProductList();
  }

  showEditDialog(formMode: FormMode, product?: Product) {
    this.formMode = formMode;
    if (formMode === 'create') {
      this.formData = null;
      this.editModalTitle = 'Create';
    } else {
      this.editModalTitle = 'Edit';
      if (!!product) this.formData = product;
    }
    this.displayEditDialog = true;
  }

  addProduct(product: Product) {
    this.productListDataService
      .addProduct(product)
      .pipe(
        catchError((err) => {
          this.toastService.sendMessage(
            'error',
            'Create error',
            err.statusText
          );
          return of({});
        })
      )
      .subscribe((_) => {
        this.loadData();
        this.toastService.sendMessage('success', 'Product added successful');
      });
    this.closeEditDialog(false);
  }
  editProduct(product: Product) {
    this.productListDataService
      .editProduct(product)
      .pipe(
        catchError((err) => {
          this.toastService.sendMessage(
            'error',
            'Update error',
            err.statusText
          );
          return of({});
        })
      )
      .subscribe((_) => {
        this.loadData();
        this.toastService.sendMessage('success', 'Product unpdated successful');
      });
    this.closeEditDialog(false);
  }

  closeEditDialog(isReloadNeeded: boolean) {
    if (isReloadNeeded) this.loadData();

    this.displayEditDialog = false;
  }

  deleteEvent(product: Product) {
    this.confirmationService.confirm({
      message: `Do you realy wand to delete the '${product.title}'?`,
      accept: () => {
        this.productListDataService
          .deleteProduct(product.id)
          .pipe(
            catchError((err) => {
              this.toastService.sendMessage(
                'error',
                'Delete error',
                err.statusText
              );
              return of({});
            })
          )
          .subscribe((_) => {
            this.loadData();
            this.toastService.sendMessage(
              'success',
              'Product deleted successful'
            );
          });
      },
    });
  }
  changeFavorite(id: number) {
    this.productListDataService.checkFavoriteProduct(id);
  }
}
