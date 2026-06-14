import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentArea } from './content-area';

describe('ContentArea', () => {
  let component: ContentArea;
  let fixture: ComponentFixture<ContentArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentArea],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
