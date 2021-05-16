from django.contrib import admin

from .models import HomePage


@admin.register(HomePage)
class HomepageAdmin(admin.ModelAdmin):
    list_display = ('name', 'header_subtitle', 'slug')
    list_editable = ('header_subtitle',)
    search_fields = ('name', 'sub_title', 'header_description', 'body')
    prepopulated_fields = {'slug': ('name',)}