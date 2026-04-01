import {Component, input, output} from '@angular/core';
import {Product} from '../models/product'
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  deleteProduct = output<number>();
  likeProduct = output<number>();
  currentImageIndex = 0;

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product().images.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product().images.length) % this.product().images.length;
  }
  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  onLike(): void {
    this.likeProduct.emit(this.product().id);
  }

  onDelete(): void {
    this.deleteProduct.emit(this.product().id);
  }

  shareOnTelegram(): void {
    const link = encodeURIComponent(this.product().link);
    const name = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${link}&text=${name}`, '_blank');
  }
}
