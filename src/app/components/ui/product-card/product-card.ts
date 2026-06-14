import { Component, input } from '@angular/core';

// Models
import { Product } from '../../../data/products';
import { QuantitySelector } from '../quantity-selector/quantity-selector';

@Component({
  selector: 'app-product-card',
  imports: [
    QuantitySelector
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  product = input.required<Product>();

  images(product: Product) : string {

    const id = product.id <= 20 ? product.id : product.id % 20;
    return 'images/' + id + '.jpg';
  }

}
