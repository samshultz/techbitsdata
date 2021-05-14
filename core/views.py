from django.shortcuts import render
from django.views.generic.base import TemplateView
from services.models import Service


class Home(TemplateView):
    template_name = "core/index.html"

    def get_context_data(self, *args, **kwargs):
        ctx = super(Home, self).get_context_data(*args, **kwargs)
        ctx['service'] = Service.objects.get(id=2)

        return ctx