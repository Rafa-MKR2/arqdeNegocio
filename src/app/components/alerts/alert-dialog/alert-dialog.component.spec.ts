import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogDataTemplate } from './alert-dialog.component';


describe('DialogDataTemplate', () => {
  let component: DialogDataTemplate;
  let fixture: ComponentFixture<DialogDataTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDataTemplate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDataTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
