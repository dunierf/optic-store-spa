import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterTopToolbarArea } from './after-top-toolbar-area';

describe('AfterTopToolbarArea', () => {
  let component: AfterTopToolbarArea;
  let fixture: ComponentFixture<AfterTopToolbarArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterTopToolbarArea],
    }).compileComponents();

    fixture = TestBed.createComponent(AfterTopToolbarArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
