import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitContentItemComponent } from './unit-content-item.component';

describe('UnitContentItemComponent', () => {
  let component: UnitContentItemComponent;
  let fixture: ComponentFixture<UnitContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitContentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
