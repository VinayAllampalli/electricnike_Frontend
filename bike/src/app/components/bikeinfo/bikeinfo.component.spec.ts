import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeinfoComponent } from './bikeinfo.component';

describe('BikeinfoComponent', () => {
  let component: BikeinfoComponent;
  let fixture: ComponentFixture<BikeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
