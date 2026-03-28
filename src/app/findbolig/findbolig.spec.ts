import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Findbolig } from './findbolig';

describe('Findbolig', () => {
  let component: Findbolig;
  let fixture: ComponentFixture<Findbolig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Findbolig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Findbolig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
