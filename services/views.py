from django.shortcuts import render, get_object_or_404

from django.views.generic.detail import DetailView

from .models import Service


class ServiceDetailView(DetailView):
    model = Service
    template_name = 'services/service.html'