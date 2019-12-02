import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelDemoComponent } from './parallel-demo.component';

describe('ParallelDemoComponent', () => {
  let component: ParallelDemoComponent;
  let fixture: ComponentFixture<ParallelDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
