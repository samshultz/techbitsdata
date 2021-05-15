from django.contrib import admin

from .models import HomePage


@admin.register(HomePage)
class HomepageAdmin(admin.ModelAdmin):
    list_display = ('name', 'sub_title', 'slug')
    list_editable = ('sub_title',)
    search_fields = ('name', 'sub_title', 'header_description', 'body')
    prepopulated_fields = {'slug': ('name',)}