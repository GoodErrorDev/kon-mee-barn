import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer.component";
import { TopComponent } from "./layout/top/top.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FooterComponent, TopComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kon-mee-barn';
   hideNavbar = false;
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // เลื่อนลง
      this.hideNavbar = true;
    } else {
      // เลื่อนขึ้น
      this.hideNavbar = false;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // ป้องกัน scrollTop เป็นค่าลบ
  }

}
