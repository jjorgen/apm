import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductsAddComponent } from './products-add.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ ProductDetailGuard],
        component: ProductsDetailComponent },
      { path: 'productAdd', component: ProductsAddComponent },
      { path: 'viewConfiguration/:id', component: ProductsDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductsDetailComponent,
    ConvertToSpacesPipe,
    ProductsAddComponent,
  ]
})
export class ProductModule { }
