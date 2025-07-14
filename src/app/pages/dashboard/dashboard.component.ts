import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModalComponent } from '../../components/image-modal/image-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { PropertyFilterComponent } from '../../components/filter/property-filter.component';
import { Router } from '@angular/router';
import { imageModel } from '../property/proprtty.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PropertyFilterComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  items = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    category: `category${(i % 3) + 1}`,
    images: [
      {url:`assets/images/property1.jpg`, title: `Image ${i + 1} - 1`},
      {url:`https://placehold.co/120`, title: `Image ${i + 1} - 2`},
      {url:`assets/images/property3.jpg`, title: `Image ${i + 1} - 3`},
      {url:`assets/images/property4.jpg`, title: `Image ${i + 1} - 4`},
      {url:`https://placehold.co/420`, title: `Image ${i + 1} - 5`},
      {url:`assets/images/property6.jpg`, title: `Image ${i + 1} - 6`},
      {url:`https://placehold.co/150`, title: `Image ${i + 1} - 7`},
      {url:`assets/images/property8.jpg`, title: `Image ${i + 1} - 8`},
      {url:`assets/images/property9.jpg`, title: `Image ${i + 1} - 9`}   


    ],
    description: `Description for item ${i + 1}`,
    price: Math.floor(Math.random() * 1000) + 100,
    area: Math.floor(Math.random() * 100) + 50,
    bedrooms: Math.floor(Math.random() * 5) + 1,
    bathrooms: Math.floor(Math.random() * 3) + 1,
    status: i % 2 === 0 ? 'Available' : 'Sold',
    yearBuilt: 2000 + (i % 20),
    address: `Address ${i + 1}`,
    province: `Province ${Math.floor(i / 10) + 1}`,
    district: `District ${Math.floor(i / 10) + 1}`,
    subdistrict: `Subdistrict ${Math.floor(i / 10) + 1}`,
    mapUrl: `https://maps.google.com/?q=${i + 1}`,
    location: `Location ${i + 1}`,
    facilities: ['Pool', 'Gym', 'Parking'].slice(0, Math.floor(Math.random() * 3) + 1),
    createdAt: new Date(),
    updatedAt: new Date()
    
  }));
  isGridLayout = false; // Default to column layout

  currentPage = 1;
  itemsPerPage = 12;
  filteredItems = [...this.items]; // Initially show all items
  isLoading = false;
  constructor(private dialog: MatDialog, private router: Router) {


  }
  toggleLayout() {
    this.isGridLayout = !this.isGridLayout;
  }
  openImageModal(images: imageModel[], initialIndex: number): void {
    this.dialog.open(ImageModalComponent, {
      data: { images, initialIndex },
      width: '80%',
      maxWidth: '800px'
    });
  }

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredItems.slice(startIndex, endIndex);
  }

  totalPages() {
    return Math.ceil(this.filteredItems.length / this.itemsPerPage);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.isLoading = true;
      setTimeout(() => {
        this.currentPage = page;
        this.isLoading = false;
      }, 300); // Adjust the timeout to match the animation duration
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLSelectElement).value;
    if (filterValue === 'all') {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => item.category === filterValue);
    }
    this.setPage(1); // Reapply loading animation
  }
  filters: any = {};  // ตัวแปรที่ใช้เก็บข้อมูล

  onFilterChanged(filters: any) {
    this.filters = filters;  // รับข้อมูลจาก child component
    console.log(this.filters);
    console.log('Filters received in dashboard:', this.filters);
  }
  onClick(item: any) {
    console.log(item); 
    localStorage.setItem("propertyId" + item.id, JSON.stringify(item));

    if (item?.id) {
      this.router.navigate(['/property', item.id]);
    } else {
      console.error('item.id is undefined:', item);
    }
  }

}
