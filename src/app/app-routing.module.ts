import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { SelectedProductsPageComponent } from './layout/selected-products-page/selected-products-page.component';
import { AllProductsPageComponent } from './layout/all-products-page/all-products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AllProductsPageComponent
  },  
  {
    path: 'all-products', component: AllProductsPageComponent
  },
  {
    path: 'selected-products', component: SelectedProductsPageComponent
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
