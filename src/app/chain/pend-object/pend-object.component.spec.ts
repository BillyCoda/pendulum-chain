import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendObjectComponent } from './pend-object.component';

describe('PendObjectComponent', () => {
  let component: PendObjectComponent;
  let fixture: ComponentFixture<PendObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
