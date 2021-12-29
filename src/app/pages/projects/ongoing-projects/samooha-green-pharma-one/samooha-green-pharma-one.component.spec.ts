import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamoohaGreenPharmaOneComponent } from './samooha-green-pharma-one.component';

describe('SamoohaGreenPharmaOneComponent', () => {
  let component: SamoohaGreenPharmaOneComponent;
  let fixture: ComponentFixture<SamoohaGreenPharmaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamoohaGreenPharmaOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamoohaGreenPharmaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
