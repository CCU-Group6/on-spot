import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodScreenComponent } from './payment-method-screen.component';

describe('PaymentMethodScreenComponent', () => {
  let component: PaymentMethodScreenComponent;
  let fixture: ComponentFixture<PaymentMethodScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMethodScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
