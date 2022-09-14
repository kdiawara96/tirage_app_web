import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirageFaitSurListeComponent } from './tirage-fait-sur-liste.component';

describe('TirageFaitSurListeComponent', () => {
  let component: TirageFaitSurListeComponent;
  let fixture: ComponentFixture<TirageFaitSurListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirageFaitSurListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirageFaitSurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
