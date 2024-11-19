import { Routes } from '@angular/router';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home-page',
        pathMatch:'full'
    },
    {
        path:'home-page',
        component:HomePageComponent
    },
    {
        path:'payment-form',
        component:PaymentFormComponent
    },
    {
        path:'payment-summary',
        component:PaymentSummaryComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];
