import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acuthelp } from './acuthelp';

describe('Acuthelp', () => {
  let component: Acuthelp;
  let fixture: ComponentFixture<Acuthelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acuthelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acuthelp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
