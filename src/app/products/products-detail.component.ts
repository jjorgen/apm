import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "./product.service";
import { IDocusignConfiguration } from './docusignConfiguration';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = 'View Configuration for';
  product: IProduct;
  docusignConfiguration: IDocusignConfiguration;
  errorMessage: string;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');  // Plus converts nummeric id to string.
    this.id = id;

    this.productService.getConfiguration(id).subscribe(
      docusignConfiguration => {
        this.docusignConfiguration = docusignConfiguration;
        console.log(docusignConfiguration);
      },
      error => this.errorMessage = <any>error  // casting operator
    ); 
  }

  onBack(): void {
    this.router.navigate(['/products']); 
  }
  
  editConfiguration() : void {
    console.log("Edit Configuration");
    let editUrl: string;
    // editUrl = '/products/editProduct' + '/' + this.id;
    editUrl = 'editProduct/' + this.id;
    this.router.navigate([editUrl]); 
  }

}
