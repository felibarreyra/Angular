import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurofutbolAbout } from './purofutbol-about';

describe('PurofutbolAbout', () => {
  let component: PurofutbolAbout;
  let fixture: ComponentFixture<PurofutbolAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurofutbolAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurofutbolAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
