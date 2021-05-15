from django.test import TestCase


class HomepageTest(TestCase):

    def test_view_use_index_template(self):
        response = self.client.get("/")
        self.assertTemplateUsed(response, 'core/index.html')