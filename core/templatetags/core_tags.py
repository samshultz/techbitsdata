from django import template

from ..models import HomePage

register = template.Library()

@register.simple_tag
def get_homepages():
    return HomePage.objects.all()