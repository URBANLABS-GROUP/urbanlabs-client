import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AuthComponent } from "./pages/auth/auth.component"
import { HomeComponent } from "./pages/home/home.component"
import { PaymentComponent } from "./pages/payment/payment.component"
import { ApplicationsComponent } from "./pages/applications/applications.component"
import { SmartHouseComponent } from "./pages/smart-house/smart-house.component"
import { CommunalServicesComponent } from "./pages/communal-services/communal-services.component"
import { CamerasComponent } from "./pages/cameras/cameras.component"
import { AccessControlComponent } from "./pages/access-control/access-control.component"
import { DocumentationComponent } from "./pages/documentation/documentation.component"

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
  },
  {
    path: 'communal-services',
    component: CommunalServicesComponent
  },
  {
    path: 'cameras',
    component: CamerasComponent
  },
  {
    path: 'access-control',
    component: AccessControlComponent
  },
  {
    path: 'documentation',
    component: DocumentationComponent
  }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
