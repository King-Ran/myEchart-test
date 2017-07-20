import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinaPeoplePieComponent } from './china-people-pie.component';

describe('ChinaPeoplePieComponent', () => {
  let component: ChinaPeoplePieComponent;
  let fixture: ComponentFixture<ChinaPeoplePieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaPeoplePieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinaPeoplePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
