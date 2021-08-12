import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBriefingComponent } from './select-briefing.component';

describe('SelectBriefingComponent', () => {
  let component: SelectBriefingComponent;
  let fixture: ComponentFixture<SelectBriefingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBriefingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
