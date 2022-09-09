import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueCardComponent } from './statistique-card.component';

describe('StatistiqueCardComponent', () => {
  let component: StatistiqueCardComponent;
  let fixture: ComponentFixture<StatistiqueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
