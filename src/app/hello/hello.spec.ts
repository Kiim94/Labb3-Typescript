import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello';

describe('Hello', () => {
  let component: Hello;
  let fixture: ComponentFixture<Hello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
