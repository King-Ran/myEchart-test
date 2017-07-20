import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncDataComponent } from './async-data.component';

describe('AsyncDataComponent', () => {
  let component: AsyncDataComponent;
  let fixture: ComponentFixture<AsyncDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
