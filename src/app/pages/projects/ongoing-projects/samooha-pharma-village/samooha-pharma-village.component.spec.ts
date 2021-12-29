import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamoohaPharmaVillageComponent } from './samooha-pharma-village.component';

describe('SamoohaPharmaVillageComponent', () => {
  let component: SamoohaPharmaVillageComponent;
  let fixture: ComponentFixture<SamoohaPharmaVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamoohaPharmaVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamoohaPharmaVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
