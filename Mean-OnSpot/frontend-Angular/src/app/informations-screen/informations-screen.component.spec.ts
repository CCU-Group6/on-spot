import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsScreenComponent } from './informations-screen.component';

describe('InformationsScreenComponent', () => {
  let component: InformationsScreenComponent;
  let fixture: ComponentFixture<InformationsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
