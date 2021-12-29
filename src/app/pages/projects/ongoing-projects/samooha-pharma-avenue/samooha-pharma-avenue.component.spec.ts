import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamoohaPharmaAvenueComponent } from './samooha-pharma-avenue.component';

describe('SamoohaPharmaAvenueComponent', () => {
  let component: SamoohaPharmaAvenueComponent;
  let fixture: ComponentFixture<SamoohaPharmaAvenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamoohaPharmaAvenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamoohaPharmaAvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
