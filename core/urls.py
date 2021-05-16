from django.urls import path

from . import views


urlpatterns = [
    path("", views.Home.as_view(), name="index"),
    path("<slug:slug>/", views.HomepageDetailView.as_view(), name="homepage_detail"),
]