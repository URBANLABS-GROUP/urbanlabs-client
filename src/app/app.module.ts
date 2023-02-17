import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiRootModule,
  TuiSvgModule
} from "@taiga-ui/core"
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component";
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component'
import { TuiAccordionModule, TuiCheckboxModule, TuiInputModule, TuiToggleModule } from "@taiga-ui/kit"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { PaymentComponent } from './pages/payment/payment.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { SmartHouseComponent } from './pages/smart-house/smart-house.component';
import { CommunalServicesComponent } from './pages/communal-services/communal-services.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    PaymentComponent,
    ApplicationsComponent,
    SmartHouseComponent,
    CommunalServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiSvgModule,
    TuiCheckboxModule,
    TuiAccordionModule,
    TuiToggleModule,
    FormsModule
  ],
  providers: [ { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
