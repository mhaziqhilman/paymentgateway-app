import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PaymentFormModule } from './payment-form/payment-form.module'; // Import the PaymentFormModule

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PaymentFormModule], // Include it here
  bootstrap: [AppComponent]
})
export class AppModule {}
