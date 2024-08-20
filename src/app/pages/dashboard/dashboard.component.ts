import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModalComponent } from '../../components/image-modal/image-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  items = Array.from({ length: 50 }, (_, i) => ({
    title: `Item ${i + 1}`,
    category: `category${(i % 3) + 1}`,
    images: [
      `https://via.placeholder.com/150?text=Image+${i + 1}+A`,
      `https://via.placeholder.com/150?text=Image+${i + 1}+B`,
      `https://via.placeholder.com/150?text=Image+${i + 1}+C`,
      `https://via.placeholder.com/150?text=Image+${i + 1}+D`,
      `https://via.placeholder.com/150?text=Image+${i + 1}+E`,
    ]
  }));
  isGridLayout = false; // Default to column layout

  currentPage = 1;
  itemsPerPage = 20;
  filteredItems = [...this.items]; // Initially show all items
  isLoading = false;
  constructor(private dialog: MatDialog) {


  }
  toggleLayout() {
    this.isGridLayout = !this.isGridLayout;
  }
  openImageModal(images: string[], initialIndex: number): void {
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

}
