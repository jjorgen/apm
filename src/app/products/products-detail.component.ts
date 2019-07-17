import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = 'DocuSign Configuration Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');  // Plus converts nummeric id to string.
    this.pageTitle +=`: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Schools First',
      'productCode': 'GDN-0011',
      'releaseDate': 'Mar 19, 2016',
      'description': 'Leaf rake with 48 inch wooden handle.',
      'price': "19.95",
      'starRating': 3.2,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/2615/Anonymous_leaf_Rake.png',

      'seqId': '',
      'subscriptionName': 'Schools First',
      'subscriptionBeginDate': 'Jan 1, 2017',
      'subscriptionEndDate': 'N/A',
      'subscriptionStatus': 'Active',
      'fileTransferMethod': '',
      'fileTransferId': '',
      'fileTransferDirectory': '',
      'fileSubscriptionCases': '',
      'docuSignSubscriptionFiles': '',
    

      'cases': 'SCHOOLSFIRST FEDERAL',

      'censusFile': 'Yes',
      'censusFileBeginDate': 'Jan 1, 2017',
      'censusFileEndDate': 'N/A',
      'censusFileCreateWhenEmpty': 'Yes',
      'censusFileInternalEmailNotificationAddress': '',

      'sraFile': 'Yes',
      'sraFileBeginDate': 'Jan 1, 2017',
      'sraFileEndDate':  'N/A',
      'sraFileCreateWhenEmpty': 'Yes',
      'sraFileInternalEmailNotificationAddress': '',

      'enrollmentFile': 'Yes',
      'enrollmentFileBeginDate': 'Jan 1, 2017',
      'enrollmentFileEndDate': 'N/A',
      'enrollmentFileCreateWhenEmpty': 'Yes',
      'enrollmentFileInternalEmailNotificationAddress':  '',

      'pdfFile': 'Yes',
      'pdfFileBeginDate': 'Mar 18, 2018',
      'pdfFileEndDate': 'N/A',

      'transferMethod':'EB2B',
      'transferId': '/devl/rptest1/eb2b',
      'transferDirectory': '/transport/in/PENSIONS/KEYNOTE_OUT',
    }
  }

  onBack(): void {
    this.router.navigate(['/products']); 
  }
}
