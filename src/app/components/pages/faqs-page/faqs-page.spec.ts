import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsPage } from './faqs-page';

describe('FaqsPage', () => {
  let component: FaqsPage;
  let fixture: ComponentFixture<FaqsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
