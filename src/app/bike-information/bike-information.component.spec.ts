import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeInformationComponent } from './bike-information.component';

describe('BikeInformationComponent', () => {
  let component: BikeInformationComponent;
  let fixture: ComponentFixture<BikeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
