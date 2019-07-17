import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { IDocusignConfiguration } from "./docusignConfiguration";
import { ProductService } from "./product.service";

@Component ({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Existing DocuSign Configurations';
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

  constructor(private productService: ProductService) {
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

  ngOnInit(): void {
    this.productService.getProducts();
    console.log('before loading products');
    console.log(this.productService.docusignConfigurations);
    
    // console.log(this.productService.docusignConfigurations[0].subscriberName);

    console.log('after loading products');
    // console.log("Before displaying configurations");
    // console.log(this.productService.list);
    // this.products = this.productService.list;
  }

  //   console.log('In OnInit');
  //   this.productService.getProducts().subscribe(
  //     products => {
  //       this.products = products;
  //       this.filteredProducts = this.products;
  //     },
  //     error => this.errorMessage = <any>error  // casting operator
  //   ); 
  // }

  showList() : void {
    console.log('In showList');
    // this.productService.getProducts().subscribe(
    //   products => {
    //     this.products = products;
    //     this.filteredProducts = this.products;
    //   },
    //   error => this.errorMessage = <any>error  // casting operator
    // ); 
  }

}