import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http : HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('../assets/data.json')
  }

  async getProduct(id : number) : Promise<Product>{
    this.http.get<Product[]>('../assets/data.json').subscribe((data => {
      return data.find((product) => {
        product.id == id;
      });
    }))
    return null;
  }

}
