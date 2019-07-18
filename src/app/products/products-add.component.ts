import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Router } from '@angular/router';

@Component({
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  pageTitle: string = 'DocuSign Configuration Add';
  product: IProduct;

  constructor( private router: Router) { }

  ngOnInit() {
  }
  
  onBack(): void {
    this.router.navigate(['/products']); 
  }

}
