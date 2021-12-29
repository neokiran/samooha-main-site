import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamoohaVariSontilluComponent } from './samooha-vari-sontillu.component';

describe('SamoohaVariSontilluComponent', () => {
  let component: SamoohaVariSontilluComponent;
  let fixture: ComponentFixture<SamoohaVariSontilluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamoohaVariSontilluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamoohaVariSontilluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
