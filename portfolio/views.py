from django.shortcuts import render
from django.views.generic.list import ListView

from .helpers import grouped
from .models import Portfolio


class ProjectListView(ListView):
    template_name = "portfolio/our_work.html"
    model = Portfolio
    context_object_name = "projects"

    def get_context_data(self, *args, **kwargs):
        ctx = super(ProjectListView, self).get_context_data(*args, **kwargs)
        ctx['project_group'] = grouped(Portfolio.objects.all(), 2)

        return ctx