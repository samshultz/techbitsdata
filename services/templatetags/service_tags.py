from django import template

from ..models import Feature, Category
register = template.Library()


@register.simple_tag
def get_categories():
    return Category.objects.all()

@register.simple_tag
def get_features():
    return Feature.objects.all()