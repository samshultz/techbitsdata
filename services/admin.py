from django.contrib import admin

from .models import Service, Category, Feature, FeatureItem


class FeatureItemInline(admin.StackedInline):
    model = FeatureItem


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
    list_display = ('name', 'header_subtitle', 'slug', 'features_list_title')
    list_editable = ('header_subtitle', 'slug', 'features_list_title')
    prepopulated_fields = {'slug': ('name', )}
    search_fields = 'name', 'header_subtitle', 'header_description', 'body'
    inlines = [FeatureItemInline]