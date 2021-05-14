from django.contrib import admin
from .models import Portfolio, PortfolioImage


class PortfolioImagesInline(admin.StackedInline):
    model = PortfolioImage


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('name', 'url')
    list_filter = ('name', 'description',)
    search_fields = ('name', 'description', 'url')
    inlines = [
        PortfolioImagesInline
    ]
