import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products : Product[] = []
  total : number = 0;

  name: string = "";
  address: string = "";
  card:number;
  constructor(public cartService : CartService) { }

  ngOnInit(): void {
    this.updateCart();
  }

  placeOrder() {
    
  }

  updateCart() {
    this.products = this.cartService.updateCart();
    this.total = this.cartService.getTotal();
  }

}
