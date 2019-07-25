import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { IDocusignConfiguration } from "./docusignConfiguration";
import { ProductService } from "./product.service";
import { Router } from '@angular/router';

@Component ({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Existing Configurations';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  // listFilter: string = 'cart';
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
  }

  onNotify(message: string): void {}

  filteredProducts: IProduct[];
  products: IProduct[] = [];
  docusignConfigurations: IDocusignConfiguration[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadConfigurations();
  }

  loadConfigurations() {
    this.productService.getProducts().subscribe(
      docusignConfigurations => {
        this.docusignConfigurations = docusignConfigurations;
      },
      error => this.errorMessage = <any>error  // casting operator
    ); 
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message; 
  } 

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(( product : IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  addConfiguration() : void {
    console.log("Add Configuration");
    this.router.navigate(['/productAdd']); 
  }

  onDelete(seqId: String) : void {
    if (confirm('Are you sure to delete this record?')) {
      this.productService.deleteConfiguration(seqId).subscribe(res => {
        this.loadConfigurations()
      });
    }
  }

}