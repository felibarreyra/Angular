import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurofutbolBoots } from './purofutbol-boots';

describe('PurofutbolBoots', () => {
  let component: PurofutbolBoots;
  let fixture: ComponentFixture<PurofutbolBoots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurofutbolBoots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurofutbolBoots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
