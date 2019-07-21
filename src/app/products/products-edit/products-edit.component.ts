import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "../product.service";
import { IDocusignConfiguration } from '../docusignConfiguration';

@Component({
  selector: 'pm-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  pageTitle: string = 'Edit configuration detail for';
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
  
}
