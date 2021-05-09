from django.contrib import admin
from .models import About, AboutSection, FAQ


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ("question",)
    search_fields = "question", "answer"


class SectionInline(admin.StackedInline):
    model = AboutSection
    prepopulated_fields = {"slug": ("title",)}


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    inlines = [
        SectionInline,
    ]
    search_fields = ('content',)