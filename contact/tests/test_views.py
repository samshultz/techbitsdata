import time

from django.test import TestCase
from django.urls import reverse
from django.utils.html import escape
from django.core import mail

from ..forms import ContactForm
from ..models import ContactInfo, Contact


class ContactFormViewTest(TestCase):

    def test_contact_form_in_page(self):
        resp = self.client.get("/")

        self.assertIsInstance(resp.context['contact_form'], ContactForm)

    def test_for_invalid_input_renders_contact_template(self):
        data = {
            'firstname': "",
            'lastname': "Doe",
            'organization': "Posyhub",
            'contact_phone': "3498378563",
            'current_website_url': '',
            'message': "How do you do it"
        }
        resp = self.client.post(reverse("contact:contact-us"), data=data)
        
        self.assertEqual(resp.status_code, 200)
        self.assertTemplateUsed(resp, "contact/contact.html")

    def test_for_contact_info_in_context(self):
    
        resp = self.client.get(reverse("contact:contact-us"))
        
        self.assertIn('contact_info', resp.context)

    def test_validation_errors_are_shown_on_page(self):

        data = {
            'firstname': "",
            'lastname': "Doe",
            'organization': "Posyhub",
            'contact_phone': "3498378563",
            'current_website_url': '',
            'message': "How do you do it"
        }

        resp = self.client.post(reverse("contact:contact-us"), data=data)
        self.assertContains(resp, "form-invalid")
        self.assertContains(resp, "You must Enter your First Name")

    def test_success_message_are_shown_on_page_on_valid_form_submit(self):

        data = {
            'firstname': "Jon",
            'lastname': "Doe",
            'organization': "Posyhub",
            'contact_phone': "3498378563",
            'current_website_url': '',
            'message': "How do you do it"
        }

        resp = self.client.post(reverse("contact:contact-us"), data=data, follow=True)
        self.assertContains(resp, "Your message has been sent successfully.")

    def test_valid_form_saves_to_db(self):
        data = {
            'firstname': "John",
            'lastname': "Doe",
            'organization': "Posyhub",
            'contact_phone': "3498378563",
            'current_website_url': '',
            'message': "How do you do it"
        }

        resp = self.client.post(reverse("contact:contact-us"), data=data)
        contact = Contact.objects.first()
        self.assertEqual(str(contact), "John Doe")