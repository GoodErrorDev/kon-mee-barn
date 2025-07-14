import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule here
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  isAdmin: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }
  onClickOption(option: string) {
    switch (option) {
      case 'proprety':
        // Navigate to the property page
        window.location.href = '/my-property';
        break;
      case 'profile':
        // Navigate to the profile page
        window.location.href = '/profile';
        break;
      case 'setting':
        // Navigate to the settings page
        window.location.href = '/settings';
        break;
      default:
        console.warn('Unknown option:', option);
    }

  }
}
