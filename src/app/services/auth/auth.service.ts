import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRole: string | null = null;

  constructor() {}

  // Method to log in and set user role
  login(role: string): void {
    this.currentUserRole = role;
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('userRole', role);
    }
  }

  // Method to log out and clear user role
  logout(): void {
    this.currentUserRole = null;
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('userRole');
    }
  }

  // Method to get current user role
  getUserRole(): string | null {
    if (this.isLocalStorageAvailable()) {
      return this.currentUserRole || localStorage.getItem('userRole');
    }
    return this.currentUserRole;
  }

  // Check if the user is an admin
  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  // Utility method to check if localStorage is available
  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
