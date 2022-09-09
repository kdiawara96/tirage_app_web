import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaListeDeTirageEtNombreTireComponent } from './la-liste-de-tirage-et-nombre-tire.component';

describe('LaListeDeTirageEtNombreTireComponent', () => {
  let component: LaListeDeTirageEtNombreTireComponent;
  let fixture: ComponentFixture<LaListeDeTirageEtNombreTireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaListeDeTirageEtNombreTireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaListeDeTirageEtNombreTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
