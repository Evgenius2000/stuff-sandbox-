import { ToastService } from './../../core/services/toast.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() data!: Product | null;
  @Output() addProduct = new EventEmitter<Product>();
  @Output() editProduct = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<boolean>();
  @Input() formMode = 'create';
  productForm!: FormGroup;
  maxFileSize: number = 1000000;
  imageUploadUrl!: string;

  constructor(private fb: FormBuilder, private toastService: ToastService) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.minLength(2)]],
      brand: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: [''],
    });
  }

  ngOnChanges() {
    this.imageUploadUrl = environment.apiUrl + `product/${this.data?.id}/image`; // todo - made unpoad image in image service

    if (this.productForm)
      this.productForm.patchValue({
        title: this.data?.title,
        price: this.data?.price,
        brand: this.data?.brand,
        category: this.data?.category,
        description: this.data?.description,
      });
  }
  onUpload(e: any) {
    this.cancel.emit(true);
  }
  uploadHandler(e: any) {
    // todo manage unloading
  }

  onAddProduct() {
    Object.values(this.productForm.controls).forEach((control) =>
      control.markAsTouched()
    );
    if (this.productForm.invalid || this.productForm.value['price'] === 0) {
      this.toastService.sendMessage('warn', 'Please fill all required fields');
    } else {
      this.formMode === 'create'
        ? this.addProduct.emit(this.productForm.value as Product)
        : this.editProduct.emit({
            ...this.productForm.value,
            id: this.data?.id,
          } as Product);
      this.onCancel();
    }
  }

  onCancel() {
    this.cancel.emit(false);
  }
}
