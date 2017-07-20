import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinaPeopleComponent } from './china-people.component';

describe('ChinaPeopleComponent', () => {
  let component: ChinaPeopleComponent;
  let fixture: ComponentFixture<ChinaPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinaPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
