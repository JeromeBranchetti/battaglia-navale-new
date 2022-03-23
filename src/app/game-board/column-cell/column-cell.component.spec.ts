import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnCellComponent } from './column-cell.component';

describe('ColumnCellComponent', () => {
  let component: ColumnCellComponent;
  let fixture: ComponentFixture<ColumnCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
