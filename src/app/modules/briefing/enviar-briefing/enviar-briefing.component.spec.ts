import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarBriefingComponent } from './enviar-briefing.component';

describe('EnviarBriefingComponent', () => {
  let component: EnviarBriefingComponent;
  let fixture: ComponentFixture<EnviarBriefingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarBriefingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarBriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
