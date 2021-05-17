from django.test import TestCase

from ..forms import ContactForm


class ContactFormTest(TestCase):

    def test_cant_save_when_empty(self):
        data = {
            'firstname': "",
            'lastname': "",
            'organization': "",
            'contact_email': "",
            'contact_phone': "",
            'current_website_url': '',
            'message': ""
        }

        form = ContactForm(data=data)

        self.assertFalse(form.is_valid())

    def test_form_is_valid_without_current_website_url(self):
        data = {
            'firstname': "John",
            'lastname': "Doe",
            'organization': "Posyhub",
            'contact_email': "admin@site.com",
            'contact_phone': "3498378563",
            'current_website_url': '',
            'message': "How do you do it"
        }
        form = ContactForm(data=data)
        self.assertTrue(form.is_valid())

    def test_form_is_valid_without_email(self):
        data = {
            'firstname': "John",
            'lastname': "Doe",
            'organization': "Posyhub",
            'contact_email': "",
            'contact_phone': "3498378563",
            'current_website_url': '',
            'message': "How do you do it"
        }
        form = ContactForm(data=data)
        self.assertTrue(form.is_valid())

    def set_single_form_field_value_to_empty_string(self, field):

        data = {
            'firstname': "John",
            'lastname': "Doe",
            'organization': "Posyhub",
            'contact_phone': "3498378563",
            'current_website_url': '',
            'message': "How do you do it"
        }
        data[field] = ""

        form = ContactForm(data=data)

        return form

    def test_firstname_errors_contain_custom_error_messages(self):
        form = self.set_single_form_field_value_to_empty_string('firstname')
        self.assertEqual(
            form.errors['firstname'],
            ['You must Enter your First Name']
        )

    def test_lastname_errors_contain_custom_error_messages(self):
        form = self.set_single_form_field_value_to_empty_string('lastname')
        self.assertEqual(
            form.errors['lastname'],
            ["Enter your Last Name"]
        )

    def test_phone_errors_contain_custom_error_messages(self):
        form = self.set_single_form_field_value_to_empty_string('contact_phone')
        self.assertEqual(
            form.errors['contact_phone'],
            ["Enter a valid phone number"]
        )

    def test_message_errors_contain_custom_error_messages(self):
        form = self.set_single_form_field_value_to_empty_string('message')
        self.assertEqual(
            form.errors['message'],
            ["Enter your message"]
        )