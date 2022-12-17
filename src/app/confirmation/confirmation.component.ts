import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  total: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.total = this.cartService.getTotal();
    this.cartService.clearCart();
  }

}
