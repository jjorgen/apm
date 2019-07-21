import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductsAddComponent } from './products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ ProductDetailGuard],
        component: ProductsDetailComponent },
      { path: 'productAdd', component: ProductsAddComponent },
      { path: 'viewConfiguration/:id', component: ProductsDetailComponent },
      { path: 'editProduct/:id', component: ProductsEditComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductsDetailComponent,
    ConvertToSpacesPipe,
    ProductsAddComponent,
    ProductsEditComponent,
  ]
})
export class ProductModule { }
