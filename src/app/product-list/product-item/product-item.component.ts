import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product;

  @Output() removeFromCartEvent = new EventEmitter<Product>();

  constructor(public cartService: CartService) { }

  removeFromCart(product: Product) {
    this.removeFromCartEvent.emit(product);
  }

}
