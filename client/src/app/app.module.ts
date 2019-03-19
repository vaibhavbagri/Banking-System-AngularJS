import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { routes } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginCredService } from './services/login-cred.service';
import { CheckAvailabilityService } from './services/check-availability.service';
import { TransferFundsService } from './services/transfer-funds.service';
import { ValidateAccService } from './services/validate-acc.service';
import { AccountsService } from './services/accounts.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FundTransferComponent,
    DashboardComponent,
    NavbarComponent,
    ConfirmationComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [
    HttpClient,
    LoginCredService,
    CheckAvailabilityService,
    TransferFundsService,
    ValidateAccService,
    AccountsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
