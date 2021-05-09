from django import forms

from .models import ContactInfo


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ('fullname', 'email', 'phone', 'message')
