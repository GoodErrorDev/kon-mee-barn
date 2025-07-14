import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-property',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, CommonModule, NgSelectModule,RouterModule],
  templateUrl: './my-property.component.html',
})
export class MyPropertyComponent implements OnInit {
  properties: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProperties();
  }
apiUrl = 'http://localhost:3000/api';
  loadProperties(): void {
    this.http.post<any>('http://localhost:3000/api/properties/list', {})
      .subscribe({
        next: (res) => this.properties = res.data,
        error: (err) => {
          console.error(err);
          alert('Failed to load properties');
        }
      });
  }
}
