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

  getProducts(): Observable<IDocusignConfiguration[]> {
    return this.http.get<IDocusignConfiguration[]>(this.productUrl).pipe(
      tap(data => (JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getConfiguration(id): Observable<IDocusignConfiguration> {
    return this.http.get<IDocusignConfiguration>(this.productUrl + '/' + id).pipe(
      tap(data => (JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

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