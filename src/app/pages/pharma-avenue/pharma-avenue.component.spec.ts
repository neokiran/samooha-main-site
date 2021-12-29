import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaAvenueComponent } from './pharma-avenue.component';

describe('PharmaAvenueComponent', () => {
  let component: PharmaAvenueComponent;
  let fixture: ComponentFixture<PharmaAvenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaAvenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaAvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
