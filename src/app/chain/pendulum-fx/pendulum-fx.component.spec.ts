import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendulumFxComponent } from './pendulum-fx.component';

describe('PendulumFxComponent', () => {
  let component: PendulumFxComponent;
  let fixture: ComponentFixture<PendulumFxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendulumFxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendulumFxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
