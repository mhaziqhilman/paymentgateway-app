import { Routes } from '@angular/router';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';

export const routes: Routes = [
    {
        path:'payment-form',
        component:PaymentFormComponent
    },
    {
        path:'payment-summary',
        component:PaymentSummaryComponent
    }
];
