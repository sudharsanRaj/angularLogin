import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderdashboardComponent } from './calenderdashboard.component';

describe('CalenderdashboardComponent', () => {
  let component: CalenderdashboardComponent;
  let fixture: ComponentFixture<CalenderdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
