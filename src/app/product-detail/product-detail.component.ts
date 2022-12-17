import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(public cartService: CartService, public productsService: ProductsService, public route : ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.product = data.find(product => product.id == Number(this.route.snapshot.paramMap.get('id')));
    })
  }

}
