import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "./product.service";
import { IDocusignConfiguration } from './docusignConfiguration';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  pageTitle: string = 'Add Configuration for';
  product: IProduct;
  docusignConfiguration: IDocusignConfiguration;
  formData: IDocusignConfiguration;

  errorMessage: string;
  id: number;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }
    
  
  ngOnInit() {
    let docusignConfiguration = <IDocusignConfiguration>{};
    docusignConfiguration.seqId='';
    docusignConfiguration.docuSignSubscriptionFiles = '';
    docusignConfiguration.fileSubscriptionCases = '';
    docusignConfiguration.fileTransferDirectory = '';
    docusignConfiguration.fileTransferId = '';
    docusignConfiguration.fileTransferMethod = '';
    docusignConfiguration.subscriptionBeginDate = '';
    docusignConfiguration.subscriptionEndDate = '';
    docusignConfiguration.subscriptionName = '';
    docusignConfiguration.subscriptionStatus = '';
    this.formData = docusignConfiguration;
  }
  
  resetForm(form?: NgForm) {
    if (form != null) 
      form.resetForm();
      this.formData = this.docusignConfiguration;
  }

  onSubmit(form: NgForm) {
    this.addConfiguration(form);
  }

  addConfiguration(form: NgForm) {
    this.productService.postConfiguration(form.value).subscribe(res => {
      this.resetForm(form);
    });
  }

  onBack(): void {
    this.router.navigate(['/products']); 
  }
}


