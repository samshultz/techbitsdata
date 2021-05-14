from django.contrib import admin

from .models import Service, Category, Feature


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("name", "sub_title")
    prepopulated_fields = {"slug": ("name",)}
    search_fields = ("name", "title", "body")

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = "name",
    search_fields = 'name',


@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = ('name', 'sub_title', 'slug')
    prepopulated_fields = {'slug': ('name', )}
    search_fields = 'name', 'sub_title', 'header_description', 'body'