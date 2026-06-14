import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCurrentPage } from './top-current-page';

describe('TopCurrentPage', () => {
  let component: TopCurrentPage;
  let fixture: ComponentFixture<TopCurrentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCurrentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TopCurrentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
