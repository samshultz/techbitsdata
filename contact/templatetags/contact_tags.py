from django import template

from ..forms import ContactForm

register = template.Library()

@register.simple_tag
def get_contact_form():
    contact_form = ContactForm()
    return contact_form