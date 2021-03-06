from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from contact.views import ContactView

urlpatterns = [
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
    path('management/', admin.site.urls),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('projects/', include('portfolio.urls', namespace="portfolio")),
    path('services/', include('services.urls', namespace="services")),
    path('contact/', include('contact.urls', namespace="contact")),
    path("lets-talk/", ContactView.as_view(), name="lets-talk"),
    path("", include("core.urls"))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)