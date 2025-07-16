import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsList } from './boots-list';

describe('BootList', () => {
  let component: BootsList;
  let fixture: ComponentFixture<BootsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
