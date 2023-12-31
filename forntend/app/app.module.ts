import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from "@angular/material/button";
import { InsurancesComponent } from './pages/insurances/insurances.component';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule,} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule}from '@angular/common/http'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './pages/login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RenewComponent } from './pages/renew/renew.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ClaimsComponent } from './pages/claims/claims.component';
import { TwoComponent } from './pages/two/two.component';
import { FourComponent } from './pages/four/four.component';
import { Option2or4wheelComponent } from './pages/option2or4wheel/option2or4wheel.component';
import { PaymentComponent } from './pages/payment/payment.component';
import {AdminComponent} from './pages/admin/admin.component';
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ContactComponent,
    AboutusComponent,
    RegistrationComponent,
    InsurancesComponent,
    LoginComponent,
    RenewComponent,
    ClaimsComponent,
    PlansComponent,
    TwoComponent,
    FourComponent,
    Option2or4wheelComponent,
    PaymentComponent,
    AdminComponent,
    AdminDashboardComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    
    
  ],

  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
