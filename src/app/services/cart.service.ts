import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.models';
import id from '@angular/common/locales/extra/id';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product): string | void {
    if (product.stock > 0) {
    this.cart.set([...this.cart(), product]);
    product.stock-=1;
  }
  else {
    return 'This item is out of stock!';
  }}

  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter((p) => p.id !== productId));
  }
  

  constructor() {


 

   }
}
