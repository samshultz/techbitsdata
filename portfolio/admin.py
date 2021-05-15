from django.contrib import admin
from django.utils.html import mark_safe

from .models import Portfolio, PortfolioImage


class PortfolioImagesInline(admin.StackedInline):
    model = PortfolioImage


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('first_photo', 'name', 'get_url')
    list_display_links = ('first_photo', 'name')
    search_fields = ('name', 'description', 'url')
    inlines = [
        PortfolioImagesInline
    ]

    def first_photo(self, obj):
        photo = obj.images.first()
        if photo:
            return mark_safe(f"<img src='{photo.image.url}' height='120' width='120' />")
        return ""

    def get_url(self, obj):
        return mark_safe(f"<a href={obj.url} target='_blank' class='button'>Go to {obj.name}</a>")