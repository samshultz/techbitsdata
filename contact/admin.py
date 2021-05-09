from django.contrib import admin

from .models import Contact, ContactInfo


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('fullname', 'email', 'phone')
    search_fields = ('fullname', 'email', 'phone', 'message')


@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ('phone', 'email')
