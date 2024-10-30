import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {
  // Define an object to hold the form data
  paymentDetails = {
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  };

  // Method to handle form submission
  onSubmit() {
    console.log('Payment submitted:', this.paymentDetails);
    // You could call a service here to send data to the backend API
  }
}
