import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickRandom } from './pick-random';

describe('PickRandom', () => {
  let component: PickRandom;
  let fixture: ComponentFixture<PickRandom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickRandom],
    }).compileComponents();

    fixture = TestBed.createComponent(PickRandom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
