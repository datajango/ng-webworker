import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumberDemoComponent } from './prime-number-demo.component';

describe('PrimeNumberDemoComponent', () => {
  let component: PrimeNumberDemoComponent;
  let fixture: ComponentFixture<PrimeNumberDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNumberDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNumberDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
