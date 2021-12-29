import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamoohaGoldenGateComponent } from './samooha-golden-gate.component';

describe('SamoohaGoldenGateComponent', () => {
  let component: SamoohaGoldenGateComponent;
  let fixture: ComponentFixture<SamoohaGoldenGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamoohaGoldenGateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamoohaGoldenGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
