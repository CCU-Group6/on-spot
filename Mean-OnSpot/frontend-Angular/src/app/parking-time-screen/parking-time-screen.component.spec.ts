import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTimeScreenComponent } from './parking-time-screen.component';

describe('ParkingTimeScreenComponent', () => {
  let component: ParkingTimeScreenComponent;
  let fixture: ComponentFixture<ParkingTimeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingTimeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingTimeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
