import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobikeComponent } from './infobike.component';

describe('InfobikeComponent', () => {
  let component: InfobikeComponent;
  let fixture: ComponentFixture<InfobikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
