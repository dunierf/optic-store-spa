import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  imports: [],
  templateUrl: './quantity-selector.html',
  styleUrl: './quantity-selector.css',
})
export class QuantitySelector {

  quantity = input<number> (0);

}
