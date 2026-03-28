import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minafdeling } from './minafdeling';

describe('Minafdeling', () => {
  let component: Minafdeling;
  let fixture: ComponentFixture<Minafdeling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Minafdeling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Minafdeling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
