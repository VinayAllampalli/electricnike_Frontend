import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeregisterComponent } from './bikeregister.component';

describe('BikeregisterComponent', () => {
  let component: BikeregisterComponent;
  let fixture: ComponentFixture<BikeregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
