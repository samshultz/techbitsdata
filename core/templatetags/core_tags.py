from django import template

from ..models import HomePage

register = template.Library()

@register.simple_tag
def get_homepages(count=None):
    if count:
        return HomePage.objects.all()[:count]
    return HomePage.objects.all()
