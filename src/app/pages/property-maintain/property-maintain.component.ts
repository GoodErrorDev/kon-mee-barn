import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationService } from '../../services/location/location.service';
import { District, Province, Subdistrict } from '../../models/location.mode';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-property-maintain',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgSelectModule],
  templateUrl: './property-maintain.component.html',
  styleUrl: './property-maintain.component.scss'
})
export class PropertyMaintainComponent {
  propertyForm: FormGroup;
  provinces: Province[] = [];
  allDistricts: District[] = [];
  allSubdistricts: Subdistrict[] = [];

  filteredDistricts: District[] = [];
  filteredSubdistricts: Subdistrict[] = [];

  selectedProvinceId: string = '';
  selectedDistrictId: string = '';
  propertyTypeOption: { key: string, value: string }[] = [
    { key: 'All', value: 'All' },
    { key: 'House', value: 'House' },
    { key: 'Apartment', value: 'Apartment' },
    { key: 'Condo', value: 'Condo' },
    { key: 'Land', value: 'Land' }];

  constructor(private fb: FormBuilder, private locationService: LocationService, private http: HttpClient) {
    this.propertyForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      price: [null, Validators.required],
      yearBuilt: [''],
      bedrooms: [0],
      bathrooms: [0],
      propertyType: [null, Validators.required],
      area: [0],
      address: ['', Validators.required],
      province: [null, Validators.required],
      district: [null, Validators.required],
      subdistrict: [null, Validators.required],
      postaddress: [null, Validators.required],
      mapUrl: [''],
      location: [''],
      facilities: this.fb.array([]),
      images: this.fb.array([]),
    });

    this.locationService.getProvinces().subscribe(data => this.provinces = data);
    this.locationService.getDistricts().subscribe(data => this.allDistricts = data);
    this.locationService.getSubdistricts().subscribe(data => this.allSubdistricts = data);

  }

  get propertyType(): FormArray {
    return this.propertyForm.get('propertyType') as FormArray;
  }
  get facilities(): FormArray {
    return this.propertyForm.get('facilities') as FormArray;
  }

  get images(): FormArray {
    return this.propertyForm.get('images') as FormArray;
  }

  addPropertyType() {
    this.propertyType.push(this.fb.control(''));
  }
  addFacility() {
    this.facilities.push(this.fb.control(''));
  }

  setMainImage(index: number) {
    this.images.controls.forEach((image, i) => {
      image.get('main_image')?.setValue(i === index);
    });
    console.log(this.images.value);
  }
  imageFiles: File[] = [];

  onMultipleFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (!files) return;

    const maxImages = 10;
    const availableSlots = maxImages - this.imageFiles.length;

    if (availableSlots <= 0) {
      alert('You can only upload up to 10 images.');
      input.value = '';
      return;
    }

    const filesToAdd = Array.from(files).slice(0, availableSlots);

    filesToAdd.forEach((file) => {
      this.imageFiles.push(file);

      const reader = new FileReader();
      reader.onload = () => {
        this.images.push(
          this.fb.group({
            url: [reader.result],     // ใช้ preview ภาพ
            title: [file.name],
            main_image: [false]
          })
        );
      };

      reader.readAsDataURL(file); // preview เท่านั้น ไม่ส่งไป backend
    });

    input.value = '';
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


  submit(): void {
    if (this.propertyForm.invalid) {
      this.propertyForm.markAllAsTouched();
      alert('Please fill out all required fields before submitting.');
      return;
    }

    /* ------ 1) เตรียม payload (ยกเว้น images) ------ */
    const payload = { ...this.propertyForm.value };
    delete payload.images;            // ไม่ส่ง base64
    payload.facilities = payload.facilities.filter((f: string) => f); // ล้างค่าว่าง

    /* ------ 2) FormData ------ */
    const formData = new FormData();
    formData.append('data', JSON.stringify(payload));      //➡️  ใส่ข้อมูล property
    this.imageFiles.forEach(file => formData.append('images', file)); //➡️  ใส่ไฟล์ n รูป
    console.log('FormData:', formData);
    /* ------ 3) POST ไป Node.js ------ */
    this.http.post('http://localhost:3000/api/properties', formData).subscribe({
      next: () => {
        alert('Property added successfully!');
        this.propertyForm.reset();
        this.imageFiles = [];
      },
      error: err => {
        console.error(err);
        alert('Failed to add property.');
      }
    });
  }



}
