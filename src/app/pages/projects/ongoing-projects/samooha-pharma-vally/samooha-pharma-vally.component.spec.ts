import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamoohaPharmaVallyComponent } from './samooha-pharma-vally.component';

describe('SamoohaPharmaVallyComponent', () => {
  let component: SamoohaPharmaVallyComponent;
  let fixture: ComponentFixture<SamoohaPharmaVallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamoohaPharmaVallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamoohaPharmaVallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
