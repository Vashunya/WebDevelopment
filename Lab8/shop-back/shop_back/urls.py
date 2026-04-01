from django.urls import path
from api import views

urlpatterns = [
    path('api/products/', views.products_list),
    path('api/products/<int:id>/', views.product_detail),
    path('api/categories/', views.categories_list),
    path('api/categories/<int:id>/', views.category_detail),
    path('api/categories/<int:id>/products/', views.category_products),
]
