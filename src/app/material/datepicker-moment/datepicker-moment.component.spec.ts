import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMomentComponent } from './datepicker-moment.component';

describe('DatepickerMomentComponent', () => {
  let component: DatepickerMomentComponent;
  let fixture: ComponentFixture<DatepickerMomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerMomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
