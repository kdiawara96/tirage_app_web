import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneTirerComponent } from './personne-tirer.component';

describe('PersonneTirerComponent', () => {
  let component: PersonneTirerComponent;
  let fixture: ComponentFixture<PersonneTirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneTirerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneTirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
