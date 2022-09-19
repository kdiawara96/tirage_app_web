import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaListeDeTirageComponent } from './la-liste-de-tirage.component';

describe('LaListeDeTirageComponent', () => {
  let component: LaListeDeTirageComponent;
  let fixture: ComponentFixture<LaListeDeTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaListeDeTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaListeDeTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// kjsdkjd