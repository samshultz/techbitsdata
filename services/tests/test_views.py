from django.test import TestCase
from django.urls import reverse
from ..models import Service

class DetailViewTest(TestCase):

    def test_template_used(self):
        service = Service.objects.create(name="Web Design")
        resp = self.client.get(reverse("services:service_detail", args=[service.slug]))
        self.assertTemplateUsed(resp, "services/service.html")