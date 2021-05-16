from django import forms

from .models import ContactInfo, Contact


class ContactForm(forms.ModelForm):

    class Meta:
        model = Contact
        fields = ('firstname', 
                  'lastname',
                  'organization',
                  'contact_email',
                  'contact_phone',
                  'current_website_url',
                  'message'
                )

        error_messages = {
            'firstname': {'required': "You must Enter your First Name"},
            'lastname': {'required': "Enter your Last Name"},
            'organization': {'required': "Enter the name of your Organization or Business"},
            'contact_phone': {'required': "Enter a valid phone number"},
            "message": {"required": 'Enter your message'}
        }