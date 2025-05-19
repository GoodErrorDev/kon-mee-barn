import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select'; 
import { NgxSliderModule } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-property-filter',
  standalone: true,
  imports: [ReactiveFormsModule, MatSliderModule, CommonModule, NgSelectModule,NgxSliderModule],
  templateUrl: './property-filter.component.html',
  styleUrls: ['./property-filter.component.scss'],
})
export class PropertyFilterComponent {
  filterForm: FormGroup;
  value: number = 50;
  options: any = {
    floor: 0,
    ceil: 100,
  };
  @Output() filterChanged = new EventEmitter<any>(); // สร้าง EventEmitter สำหรับส่งข้อมูล
  Property_type = []
  constructor() {
    // สร้าง formGroup สำหรับฟอร์ม
    this.filterForm = new FormGroup({
      query: new FormControl(''),
      location: new FormControl(''),
      type: new FormControl('all'),
      bedrooms: new FormControl('0'),
      bathrooms: new FormControl('0'),
      priceMin: new FormControl(0),
      priceMax: new FormControl(5000000),
    });
  }

  // ฟังก์ชันที่ทำงานเมื่อฟอร์มถูกส่ง
  onSubmit() {
    if (this.filterForm.valid) {
      this.filterChanged.emit(this.filterForm.value);  // ส่งข้อมูลฟอร์ม
    } else {
      console.log('Form is invalid!');
    }
  }

  // ฟังก์ชันในการเคลียร์ฟอร์ม
  onClear() {
    this.filterForm.reset();
  }
  onPriceChange(event: any, _str: string) {
    const value = event.target.value;
    if (value < 0) {
      this.filterForm.patchValue({ priceMin: 0 });
    } else if (value > 5000000) {
      this.filterForm.patchValue({ priceMax: 5000000 });
    }

  }
}
