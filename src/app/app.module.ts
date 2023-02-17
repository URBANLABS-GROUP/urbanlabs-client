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
import { TuiAccordionModule, TuiCheckboxModule, TuiInputModule } from "@taiga-ui/kit"
import { ReactiveFormsModule } from "@angular/forms";
import { PaymentComponent } from './pages/payment/payment.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { SmartHouseComponent } from './pages/smart-house/smart-house.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    PaymentComponent,
    ApplicationsComponent,
    SmartHouseComponent
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
    TuiAccordionModule
  ],
  providers: [ { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
