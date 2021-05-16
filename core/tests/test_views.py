from django.test import TestCase
from django.urls import reverse

from ..models import HomePage


class HomepageTest(TestCase):

    def test_view_use_index_template(self):
        response = self.client.get("/")
        self.assertTemplateUsed(response, 'core/index.html')


class HomepageDetailViewTest(TestCase):

    def test_view_use_homepage_template(self):
        homepage = HomePage.objects.create(name="Real Estate")
        resp = self.client.get(reverse("homepage_detail", args=[homepage.slug]))
        
        self.assertTemplateUsed(resp, 'core/homepage.html')