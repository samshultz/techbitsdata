from django.urls import path

from . import views

app_name = 'services'

urlpatterns = [
    path("<slug:slug>/", views.ServiceDetailView.as_view(), name="service_detail"),
    path("features/<slug:slug>/", views.FeatureDetailView.as_view(), name='feature_detail')
]