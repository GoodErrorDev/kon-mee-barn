import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMaintainComponent } from './property-maintain.component';

describe('PropertyMaintainComponent', () => {
  let component: PropertyMaintainComponent;
  let fixture: ComponentFixture<PropertyMaintainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyMaintainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
