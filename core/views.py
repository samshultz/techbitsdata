from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView


from .models import HomePage


class Home(TemplateView):
    template_name = "core/index.html"


class HomepageDetailView(DetailView):
    model = HomePage
    template_name = "core/homepage.html"