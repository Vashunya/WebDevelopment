import {Component} from '@angular/core';
import {Product} from '../models/product';
import {Category} from '../models/category';
import {ProductCard} from '../product-card/product-card'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  imports: [ProductCard]
})
export class ProductList {
  categories: Category[] = [
    { id: 1, name: 'розовый штука' },
    { id: 2, name: 'клей' },
    { id: 3, name: 'ага' },
    { id: 4, name: 'деньги' }
  ];

  selectedCategoryId: number | null = null;
  products: Product[] = [
    {
      id: 1,
      name: 'Попсокет 002 розовый',
      description: '',
      price: 54,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p6d/47574716.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/p67/47574730.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa9/p6d/47574719.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p6b/47574722.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/popsoket-002-rozovyi-122283935/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Стабилизатор напряжения Ресанта АСН-1000/1-Ц',
      description: '',
      price: 19890,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/he3/63765255815198.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/he3/63765255815198.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/h03/63765262106654.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h3c/63765271150622.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/stabilizator-naprjazhenija-resanta-asn-1000-1-ts-5400768/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 3,
      name: 'Доллар',
      description: 'https://kaspi.kz/shop/p/dollar-280x200x2-mm-risunok-107802389/?c=750000000',
      price: 348,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3e/p57/90208536.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hff/66325223505950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/h3b/66325224882206.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dollar-280x200x2-mm-risunok-107802389/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 4,
      name: 'Clear Ronaldo Legend By CR7 шампунь 350 мл',
      description: '',
      price: 27400000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p81/p6b/54411153.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p81/p6b/54411153.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p81/p6b/54411153.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/clear-ronaldo-legend-by-cr7-shampun-350-ml-142896854/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 5,
      name: 'EYE By клей для накладных ресниц 7ml прозрачный',
      description: '',
      price: 265,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbd/pa7/48727802.jpeg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p80/p9d/48727805.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/p9d/48727805.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/eye-by-klei-dlja-nakladnyh-resnits-7ml-prozrachnyi-108329917/?c=750000000',
      categoryId: 2,
      likes: 0
    }
  ];

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
  likeProduct(id: number): void {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.likes++;
    }
  }
}
