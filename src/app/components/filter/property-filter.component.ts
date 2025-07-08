import { Component, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { District, Province, Subdistrict } from '../../models/location.mode';
import { LocationService } from '../../services/location/location.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-property-filter',
  standalone: true,
  imports: [ReactiveFormsModule, MatSliderModule, CommonModule, NgSelectModule, NgxSliderModule, MatSliderModule, FormsModule],
  templateUrl: './property-filter.component.html',
  styleUrls: ['./property-filter.component.scss'],
})
export class PropertyFilterComponent {
  filterForm: FormGroup;
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  isBrowser: boolean;
  @Output() filterChanged = new EventEmitter<any>(); // สร้าง EventEmitter สำหรับส่งข้อมูล
  Property_type = [{ 'key': 'All', 'value': 'All' }, { 'key': 'House', 'value': 'House' }, { 'key': 'Apartment', 'value': 'Apartment' }, { 'key': 'Condo', 'value': 'Condo' }, { 'key': 'Land', 'value': 'Land' }];
  provinces: Province[] = [];
  allDistricts: District[] = [];
  allSubdistricts: Subdistrict[] = [];

  filteredDistricts: District[] = [];
  filteredSubdistricts: Subdistrict[] = [];

  selectedProvinceId: string = '';
  selectedDistrictId: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private locationService: LocationService) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    // สร้าง formGroup สำหรับฟอร์ม
    this.filterForm = new FormGroup({
      KEYWORDS: new FormControl(null),
      PROVIND: new FormControl(null),
      DISTRICT: new FormControl(null),
      SUBDISTRICT: new FormControl(null),
      PROPERTY_TYPE: new FormControl('All'),
      BEDROOM: new FormControl(null),
      BATHROOM: new FormControl(null),
      PRICE_MIN: new FormControl(0),
      PRICE_MAX: new FormControl(5000000),
    });
    this.locationService.getProvinces().subscribe(data => this.provinces = data);
    this.locationService.getDistricts().subscribe(data => this.allDistricts = data);
    this.locationService.getSubdistricts().subscribe(data => this.allSubdistricts = data);

  }
  formatLabel(value: number): string {
    switch (true) {
      case value >= 1000 && value < 1000000:
        // ถ้าค่ามากกว่าหรือเท่ากับ 1000 และน้อยกว่า 1000000
        return Math.round(value / 1000) + 'k';
      case value >= 1000000:
        return (value / 1000000).toFixed(1) + 'M';
      default:
        return value.toString();
    }
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

  onProvinceChange(value: any): void {
    console.log(value);
    console.log(this.allDistricts);
    this.filteredDistricts = this.allDistricts.filter(d => d.provinceCode === value.provinceCode);
    this.filteredSubdistricts = [];
    this.selectedDistrictId = '';
    console.log(this.filteredDistricts)
  }

  onDistrictChange(value: any): void {
    this.filteredSubdistricts = this.allSubdistricts.filter(s => s.districtCode === value.districtCode);
  }
}
