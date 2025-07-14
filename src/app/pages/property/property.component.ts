import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser, CommonModule, CurrencyPipe } from '@angular/common';
import { PropertyViewModel } from './proprtty.model';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {
  propertyId: string = "";
  propertyView: PropertyViewModel = {
    id: '',
    title: '',
    description: '',
    price: 0,
    propertyType: '',
    bedrooms: 0,
    bathrooms: 0,
    status: '',
    yearBuilt: '',
    area: 0,
    address: '',
    province: '',
    district: '',
    subdistrict: '',
    images: [],
    mapUrl: '',
    location: '',
    facilities: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
agent = {
  name: 'Somchai Property',
  imageUrl: 'https://placehold.co/420',
  email: 'agent@example.com'
};

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.paramMap.get('id') ?? '';

    if (isPlatformBrowser(this.platformId)) {
      const raw = localStorage.getItem("propertyId" + this.propertyId);
      if (raw) {
        this.propertyView = JSON.parse(raw);
        console.log('Property from storage:', this.propertyView);
      }
    }
  } 

}
