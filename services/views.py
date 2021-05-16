from django.shortcuts import render, get_object_or_404
from django.views.generic.detail import DetailView

from portfolio.helpers import grouped

from .models import Service, Feature


class ServiceDetailView(DetailView):
    model = Service
    template_name = 'services/service.html'


class FeatureDetailView(DetailView):
    model = Feature
    template_name = 'services/feature.html'

    def get_context_data(self, *args, **kwargs):
        ctx = super(FeatureDetailView, self).get_context_data(*args, **kwargs)
        ctx['feature_item_groups'] = grouped(self.get_object().feature_items.all(), 4)

        return ctx