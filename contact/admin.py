from django.contrib import admin

from .models import Contact, ContactInfo


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('firstname', 'lastname', 'contact_email', 'contact_phone')
    search_fields = ('firstname', 'lastname', 'contact_email', 'contact_phone', 'message')


@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ('phone', 'email')
