import json
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
from .models import Product, Category


def json_response(data, status=200):
    return HttpResponse(
        json.dumps(data, ensure_ascii=False),
        content_type='application/json; charset=utf-8',
        status=status
    )


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category_id,
        'category': product.category.name,
    }


def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }


@require_http_methods(["GET"])
def products_list(request):
    products = Product.objects.select_related('category').all()
    return json_response([product_to_dict(p) for p in products])


@require_http_methods(["GET"])
def product_detail(request, id):
    try:
        product = Product.objects.select_related('category').get(pk=id)
        return json_response(product_to_dict(product))
    except Product.DoesNotExist:
        return json_response({'error': 'Product not found'}, status=404)


@require_http_methods(["GET"])
def categories_list(request):
    categories = Category.objects.all()
    return json_response([category_to_dict(c) for c in categories])


@require_http_methods(["GET"])
def category_detail(request, id):
    try:
        category = Category.objects.get(pk=id)
        return json_response(category_to_dict(category))
    except Category.DoesNotExist:
        return json_response({'error': 'Category not found'}, status=404)


@require_http_methods(["GET"])
def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
        products = Product.objects.filter(category=category).select_related('category')
        return json_response([product_to_dict(p) for p in products])
    except Category.DoesNotExist:
        return json_response({'error': 'Category not found'}, status=404)
