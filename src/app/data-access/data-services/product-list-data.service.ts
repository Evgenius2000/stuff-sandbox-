import { ImageService } from '../../core/services/image.service';
import { map, Observable, tap, of, take, switchMap } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { Injectable } from '@angular/core';
import { Product } from '../../core/interface';

@Injectable({
  providedIn: 'root',
})
export class ProductListDataService {
  private favoriveLoacalArr: number[] = [];

  constructor(
    private httpService: HttpService,
    private imageService: ImageService
  ) {}

  getProductList(): Observable<Product[]> {
    return this.httpService.httpRequestGet('products').pipe(
      map((i) => i.products as Product[]),
      map((arr) => {
        const data = arr.map((item) => {
          const { image, ...obj } = item;
          return { ...obj, image: this.imageService.getImageURL(image) };
        });
        return data;
      }),
      map((arr) => {
        this.favoriveLoacalArr = JSON.parse(
          localStorage.getItem('favorite') || '[]'
        );
        arr.forEach((row) =>
          this.favoriveLoacalArr.forEach((locArray) => {
            if (row.id === locArray) {
              row.favorite = true;
            }
          })
        );
        return arr;
      })
    );
  }

  getProductListFavorite(): Observable<Product[]> {
    return this.getProductList().pipe(
      map((data) => data.filter((item) => item.favorite === true))
    );
  }

  addProduct(product: Product): Observable<any> {
    return this.httpService.httpRequestPost(`product`, product);
  }

  editProduct(product: Product): Observable<any> {
    return this.httpService.httpRequestPatch(`product/${product.id}`, product);
  }

  deleteProduct(id: number | undefined): Observable<number | null> {
    if (!id) return of(null);
    return this.httpService.httpRequestDelete(`product`, id);
  }

  checkFavoriteProduct(id: number) {
    const index = this.favoriveLoacalArr.findIndex((i) => i === id);
    index < 0
      ? this.favoriveLoacalArr.push(id)
      : this.favoriveLoacalArr.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(this.favoriveLoacalArr));
  }
}
