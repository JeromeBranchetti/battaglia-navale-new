import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireButtonComponent } from './fire-button.component';

describe('FireButtonComponent', () => {
  let component: FireButtonComponent;
  let fixture: ComponentFixture<FireButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
