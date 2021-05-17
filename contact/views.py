from django.shortcuts import render

from django.views.generic.edit import CreateView
from django.urls import reverse_lazy

from .forms import ContactForm
from .models import ContactInfo


class ContactView(CreateView):
    template_name = 'contact/contact.html'
    form_class = ContactForm
    success_url = reverse_lazy("contact:contact-us")

    def get_context_data(self, *args, **kwargs):
        ctx = super(ContactView, self).get_context_data(*args, **kwargs)
        ctx['contact_info'] = ContactInfo.objects.first()

        return ctx