import { Component, OnInit } from "@angular/core"

@Component({
  selector: 'urb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public closeBanner() {
    const banner = document.getElementById("banner")
    if (banner !== null) {
      banner.style.display = "none"
      document.querySelectorAll(".blur").forEach(
          el => {
            (el as HTMLElement).style.filter = "none";
            (el as HTMLElement).style.pointerEvents = "auto"
          });
    }
    localStorage.setItem("banner", "banner-off")
  }

  public ngOnInit() {
    if (localStorage.getItem("banner") === "banner-off") {
      this.closeBanner()
    }
  }
}
