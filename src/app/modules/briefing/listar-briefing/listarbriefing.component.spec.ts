import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarbriefingComponent } from './listarbriefing.component';

describe('ListarbriefingComponent', () => {
  let component: ListarbriefingComponent;
  let fixture: ComponentFixture<ListarbriefingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarbriefingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarbriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
