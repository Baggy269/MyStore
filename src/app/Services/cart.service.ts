import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartItem } from '../models/cartItem.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.updateCart();
  }

  updateCart(): Product[] {
    if (localStorage.getItem('cart') != null)
      this.cart = JSON.parse(localStorage.getItem('cart'));
    else
      localStorage.setItem('cart', JSON.stringify([]));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    return this.cart.map((cartItem) => {
      return cartItem.product;
    })
  }

  getTotal(): number {
    this.updateCart();
    let total = 0;
    this.cart.forEach(cartItem => {
      total += cartItem.product.price * cartItem.quantity;
    })
    return Number(total.toFixed(2));
  }

  addToCart(product: Product) {
    this.updateCart();
    let inCart = false;
    this.cart.forEach((cartItem) => {
      if (cartItem.product.id == product.id) {
        cartItem.quantity += 1;
        inCart = true;
      }
    })
    if (!inCart) {
      this.cart.push({
        product: product,
        quantity: 1
      })
    }
    this.notify(product.name + ' added to cart.')
    this.updateCache();
  }

  removeFromCart(product: Product) {
    this.updateCart();
    this.cart = this.cart.filter((cartItem) => {
      return cartItem.product.id != product.id;
    })
    this.notify(product.name + ' removed from cart.')
    this.updateCache();
  }

  updateQuantity(product: Product, quantity: number) {
    this.updateCart();
    this.cart.forEach((cartItem) => {
      if (cartItem.product.id == product.id) {
        cartItem.quantity = quantity;
        return;
      }
    })
    this.notify('Cart updated')
    this.updateCache();
  }

  getQuantity(product: Product): number {
    this.updateCart();
    let quantity = 0;
    this.cart.forEach((cartItem) => {
      if (cartItem.product.id == product.id)
        quantity = cartItem.quantity;
    })
    return quantity;
  }

  updateCache() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getSize() {
    let size = 0;
    this.cart.forEach(cartItem => {
      size += Number(cartItem.quantity);
    })
    return size;
  }

  clearCart() {
    this.cart = [];
    this.updateCache();
  }

  notify(message: string) {
    this.snackBar.open(message, '', {duration: 2000})
  }

}
