import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupScreenComponent } from './popup-screen.component';

describe('PopupScreenComponent', () => {
  let component: PopupScreenComponent;
  let fixture: ComponentFixture<PopupScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
