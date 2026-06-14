import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListHomePage } from './product-list-home-page';

describe('ProductListHomePage', () => {
  let component: ProductListHomePage;
  let fixture: ComponentFixture<ProductListHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListHomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
