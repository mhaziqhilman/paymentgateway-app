import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent {
  paymentData = {
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    amount: 100.0, // Example amount
  };

  constructor(private paymentService: PaymentService) {}

  validatePaymentForm() {
    const { cardNumber, expiryDate, cvv, email, address, city, postalCode, country } = this.paymentData;

    if (!cardNumber || cardNumber.length < 16) {
      alert('Please enter a valid card number (16 digits).');
      return false;
    }

    if (!expiryDate || expiryDate.length < 5 || !expiryDate.includes('/')) {
      alert('Please enter a valid expiry date in MM/YY format.');
      return false;
    }

    if (!cvv || cvv.length < 3) {
      alert('Please enter a valid CVV (3 digits).');
      return false;
    }

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!address || !city || !postalCode || !country) {
      alert('Please complete all billing information.');
      return false;
    }

    return true;
  }

  submitPayment() {
    if (!this.validatePaymentForm()) {
      return;
    }

    this.paymentService.sendPaymentRequest(this.paymentData).subscribe({
      next: (response) => {
        alert('Payment processed successfully!');
        console.log(response);
      },
      error: (err) => {
        alert('Payment failed. Please try again.');
        console.error(err);
      },
    });
  }
}
