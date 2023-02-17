import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AuthComponent } from "./pages/auth/auth.component"
import { HomeComponent } from "./pages/home/home.component"
import { PaymentComponent } from "./pages/payment/payment.component"
import { ApplicationsComponent } from "./pages/applications/applications.component"
import { SmartHouseComponent } from "./pages/smart-house/smart-house.component"

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent
  },
  {
    path: 'smart-house',
    component: SmartHouseComponent
  }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
