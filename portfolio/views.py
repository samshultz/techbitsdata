from django.shortcuts import render
from django.views.generic.list import ListView

from .models import Portfolio


class ProjectListView(ListView):
    template_name = "portfolio/our_work.html"
    model = Portfolio
    context_object_name = "projects"