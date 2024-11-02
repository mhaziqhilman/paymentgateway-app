// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentFormComponent } from './payment-form/payment-form.component';

const routes: Routes = [
  { path: 'payment', component: PaymentFormComponent }, // Route to payment form
  { path: '', redirectTo: '/payment', pathMatch: 'full' }, // Redirect root to 'payment' or any other default component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
