import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../Services/cart.service';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
