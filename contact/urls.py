from django.urls import path

from . import views

app_name = "contact"

urlpatterns = [
    path("lets-talk/", views.ContactView.as_view(), name="contact-us")
]