import { Component } from '@angular/core';

@Component({
  selector: 'urb-smart-house',
  templateUrl: './smart-house.component.html',
  styleUrls: ['./smart-house.component.css']
})
export class SmartHouseComponent {
  public closeBanner() {
    const smartBanner = document.getElementById("smart-banner")
    if (smartBanner !== null) {
      smartBanner.style.display = "none"
    }
  }

  public openBanner() {
    const smartBanner = document.getElementById("smart-banner")
    if (smartBanner !== null) {
      smartBanner.style.display = "flex"
    }
  }
}
