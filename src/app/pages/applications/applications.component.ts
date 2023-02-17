import { Component } from '@angular/core';

@Component({
  selector: 'urb-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

  public createApplication() {
    const applications = document.getElementById("applications")
    const applicationsBack = document.getElementById("application-back")
    if (applications !== null && applicationsBack !== null) {
      applications.style.display = "none"
      applicationsBack.style.display = "none"
    }
    const createApplications = document.getElementById("create-application")
    const applicationsClose = document.getElementById("application-close")
    if (createApplications !== null && applicationsClose !== null) {
      createApplications.style.display = "flex"
      applicationsClose.style.display = "flex"
    }
  }

}
