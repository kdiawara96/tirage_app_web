import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalListeComponent } from './total-liste.component';

describe('TotalListeComponent', () => {
  let component: TotalListeComponent;
  let fixture: ComponentFixture<TotalListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
