import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershistoryComponent } from './usershistory.component';

describe('UsershistoryComponent', () => {
  let component: UsershistoryComponent;
  let fixture: ComponentFixture<UsershistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsershistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
