import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goodtoknow } from './goodtoknow';

describe('Goodtoknow', () => {
  let component: Goodtoknow;
  let fixture: ComponentFixture<Goodtoknow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Goodtoknow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goodtoknow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
