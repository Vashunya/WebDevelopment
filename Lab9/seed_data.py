"""
Run this script to populate the database with 4 categories and 20 products.
Usage: python seed_data.py
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

# Clear existing data
Product.objects.all().delete()
Category.objects.all().delete()

# Create 4 categories
electronics = Category.objects.create(name='Электроника')
cosmetics  = Category.objects.create(name='Косметика')
food       = Category.objects.create(name='Продукты')
home       = Category.objects.create(name='Дом и сад')

# Create 20 products (5 per category)
products = [
    # Электроника
    dict(name='iPhone 15 Pro', price=499000, description='Смартфон Apple', count=10, is_active=True, category=electronics),
    dict(name='Samsung Galaxy S24', price=389000, description='Смартфон Samsung', count=15, is_active=True, category=electronics),
    dict(name='MacBook Air M2', price=899000, description='Ноутбук Apple', count=5, is_active=True, category=electronics),
    dict(name='AirPods Pro', price=129000, description='Беспроводные наушники', count=20, is_active=True, category=electronics),
    dict(name='iPad Air', price=349000, description='Планшет Apple', count=8, is_active=False, category=electronics),

    # Косметика
    dict(name='Крем для лица Nivea', price=1500, description='Увлажняющий крем', count=50, is_active=True, category=cosmetics),
    dict(name='Шампунь Head & Shoulders', price=1200, description='Шампунь от перхоти', count=40, is_active=True, category=cosmetics),
    dict(name='Духи Chanel №5', price=45000, description='Женские духи', count=12, is_active=True, category=cosmetics),
    dict(name='Тушь Maybelline', price=2800, description='Тушь для ресниц', count=30, is_active=True, category=cosmetics),
    dict(name='Помада MAC Ruby Woo', price=8500, description='Матовая помада', count=25, is_active=False, category=cosmetics),

    # Продукты
    dict(name='Кофе Nescafe Gold', price=3200, description='Растворимый кофе 190г', count=100, is_active=True, category=food),
    dict(name='Чай Lipton', price=1800, description='Чёрный чай 100 пакетиков', count=80, is_active=True, category=food),
    dict(name='Шоколад Lindt 85%', price=2500, description='Горький шоколад', count=60, is_active=True, category=food),
    dict(name='Овсянка Myllyn Paras', price=900, description='Овсяные хлопья 1кг', count=45, is_active=True, category=food),
    dict(name='Мёд натуральный', price=3500, description='Гречишный мёд 500г', count=30, is_active=True, category=food),

    # Дом и сад
    dict(name='Пылесос Dyson V15', price=289000, description='Беспроводной пылесос', count=7, is_active=True, category=home),
    dict(name='Кофемашина DeLonghi', price=159000, description='Автоматическая кофемашина', count=9, is_active=True, category=home),
    dict(name='Набор ножей Zwilling', price=45000, description='Кухонные ножи 5шт', count=15, is_active=True, category=home),
    dict(name='Горшок для цветов', price=2200, description='Керамический горшок 20см', count=50, is_active=True, category=home),
    dict(name='Лейка садовая', price=3500, description='Металлическая лейка 10л', count=20, is_active=False, category=home),
]

for p in products:
    Product.objects.create(**p)

print(f"Created {Category.objects.count()} categories and {Product.objects.count()} products.")
