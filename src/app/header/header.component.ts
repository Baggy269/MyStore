import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.updateCart();
  }

}
