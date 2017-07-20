import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklyStartComponent } from './quickly-start.component';

describe('QuicklyStartComponent', () => {
  let component: QuicklyStartComponent;
  let fixture: ComponentFixture<QuicklyStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicklyStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicklyStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
