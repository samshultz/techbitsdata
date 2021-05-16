from django.shortcuts import render

from django.views.generic.edit import CreateView
from django.urls import reverse_lazy

from .forms import ContactForm


class ContactView(CreateView):
    template_name = 'contact/contact.html'
    form_class = ContactForm
    success_url = reverse_lazy("contact:contact-us")

    def form_valid(self, form):
        self.object = form.save()
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())
