import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { IDocusignConfiguration } from "./docusignConfiguration";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private productUrl = 'api/products/products.json';
  private productUrl = 'http://localhost:8282/rp-keynote-web-services/service/docuSignConfiguration';
  products : IProduct[];
  docusignConfigurations: IDocusignConfiguration[];

  constructor(private http : HttpClient) {}

  getProducts(): void {
    this.http.get(this.productUrl)
    .toPromise().then(res => this.docusignConfigurations = res as IDocusignConfiguration[]);
    console.log("result: " + this.docusignConfigurations);

    // if (this.docusignConfigurations && this.docusignConfigurations.length > 0) {
    if (this.docusignConfigurations) {
      for (let i = 0; i < this.docusignConfigurations.length; i++) { 
        console.log("Subscription Name: " + this.docusignConfigurations[i].subscriptionName);
      }
    }

    // return this.http.get<IProduct[]>(this.productUrl).pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }
  // getProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(this.productUrl).pipe(
  //     tap(data => console.log('All: ' + JSON.stringify(data))),
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: {err.status}, error message is: {$err.message}`;
    }  
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}