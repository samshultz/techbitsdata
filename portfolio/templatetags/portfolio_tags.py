from django import template

from ..models import Portfolio
from ..helpers import grouped


register = template.Library()

@register.simple_tag
def get_projects(count=None):
    portfolio = None
    if count:
        portfolio = Portfolio.objects.all()[:count]
    portfolio = Portfolio.objects.all()

    return grouped(portfolio, 2)
