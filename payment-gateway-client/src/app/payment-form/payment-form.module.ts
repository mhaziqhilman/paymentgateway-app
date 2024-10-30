import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFormComponent } from './payment-form.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [PaymentFormComponent],
  imports: [CommonModule, FormsModule], // Import FormsModule here
  exports: [PaymentFormComponent] // Export the component if needed
})
export class PaymentFormModule {}
