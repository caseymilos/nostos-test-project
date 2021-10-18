import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCardComponent } from './forecast-card.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('ForecastCardComponent', () => {
  let component: ForecastCardComponent;
  let fixture: ComponentFixture<ForecastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastCardComponent],
      imports: [MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
