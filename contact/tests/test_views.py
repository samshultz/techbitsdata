from django.test import TestCase
from django.urls import reverse
from django.utils.html import escape

from ..forms import ContactForm


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

    # def test_validation_errors_are_shown_on_page(self):

    #     data = {
    #         'firstname': "",
    #         'lastname': "Doe",
    #         'organization': "Posyhub",
    #         'contact_phone': "3498378563",
    #         'current_website_url': '',
    #         'message': "How do you do it"
    #     }

    #     resp = self.client.post(reverse("contact:contact-us"), data=data)
    #     self.assertContains(resp, escape("You must Enter your First Name"))