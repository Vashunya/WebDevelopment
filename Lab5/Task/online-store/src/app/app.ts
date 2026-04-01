import { Component } from '@angular/core';
import { ProductList} from './product-list/product-list';
import {Product} from './models/product';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'online-store';
  favorites: Product[] = [];

  toggleFavorite(productId: number): void {
    const product = this.favorites.find(p => p.id === productId);
    if (product) {
      this.favorites = this.favorites.filter(p => p.id !== productId);
    }
  }
}
