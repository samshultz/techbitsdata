from django import template

from ..models import ContactInfo
from ..forms import ContactForm

register = template.Library()

@register.simple_tag
def get_contact_form():
    contact_form = ContactForm()
    return contact_form

@register.simple_tag
def get_contact_info():
    contact = ContactInfo.objects.first() or ""

    return contact