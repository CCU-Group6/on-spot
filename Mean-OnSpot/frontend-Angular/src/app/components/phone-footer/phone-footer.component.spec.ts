import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFooterComponent } from './phone-footer.component';

describe('PhoneFooterComponent', () => {
  let component: PhoneFooterComponent;
  let fixture: ComponentFixture<PhoneFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
