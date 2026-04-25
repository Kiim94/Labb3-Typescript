import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLive } from './show-live';

describe('ShowLive', () => {
  let component: ShowLive;
  let fixture: ComponentFixture<ShowLive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLive],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowLive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
