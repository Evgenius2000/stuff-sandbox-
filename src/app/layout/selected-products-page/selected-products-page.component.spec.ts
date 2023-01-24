import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductsPageComponent } from './selected-products-page.component';

describe('SelectedProductsPageComponent', () => {
  let component: SelectedProductsPageComponent;
  let fixture: ComponentFixture<SelectedProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedProductsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
