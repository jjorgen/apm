import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "../product.service";
import { IDocusignConfiguration } from '../docusignConfiguration';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  pageTitle: string = 'Edit configuration detail for';
  formData: IDocusignConfiguration;
  errorMessage: string;
  id: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
      this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) 
      form.resetForm();

      let id = +this.route.snapshot.paramMap.get('id');  // Plus converts nummeric id to string.
      this.id = id;

      this.productService.getConfiguration(id).subscribe(
        docusignConfiguration => {
          this.formData = docusignConfiguration;
          console.log(docusignConfiguration);
        },
        error => this.errorMessage = <any>error  // casting operator
      ); 
  }

  onBack(): void {
    this.router.navigate(['/products']); 
  }
  
}
