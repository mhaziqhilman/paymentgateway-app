// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PaymentService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'http://localhost:3000/api/payments'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  sendPaymentRequest(paymentData: any): Observable<any> {
    return this.http.post(this.apiUrl, paymentData);
  }
}

