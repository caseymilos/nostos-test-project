import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDialogComponent } from './forecast-dialog.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

describe('ForecastDialogComponent', () => {
  let component: ForecastDialogComponent;
  let fixture: ComponentFixture<ForecastDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
