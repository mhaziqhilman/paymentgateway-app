import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentFormComponent } from './payment-form/payment-form.component'; // Import your PaymentFormComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaymentFormComponent], // Include it here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fixed typo here (change styleUrl to styleUrls)
})
export class AppComponent {
  title = 'payment-gateway-client';
}
