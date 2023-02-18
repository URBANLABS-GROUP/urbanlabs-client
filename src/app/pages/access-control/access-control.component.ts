import { Component } from '@angular/core';

@Component({
  selector: 'urb-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css']
})
export class AccessControlComponent {
  public openCamera(id: any) {
    const camera = document.getElementById(id)
    if (camera !== null) {
      camera.style.display = "none" ? "flex" : "none"
    }
  }
}
