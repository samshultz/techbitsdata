from django.test import TestCase
from django.urls import reverse

from ..models import Service, Feature


class ServiceDetailViewTest(TestCase):

    def test_template_used(self):
        service = Service.objects.create(name="Web Design")
        resp = self.client.get(reverse("services:service_detail", args=[service.slug]))
        self.assertTemplateUsed(resp, "services/service.html")


class FeatureDetailViewTest(TestCase):

    def test_template_used(self):
        feature = Feature.objects.create(name="Online Payments Processing")
        resp = self.client.get(reverse("services:feature_detail", args=[feature.slug]))
        self.assertTemplateUsed(resp, 'services/feature.html')

    def test_get_context_data(self):
        feature = Feature.objects.create(name="Online Payments Processing")
        resp = self.client.get(reverse("services:feature_detail", args=[feature.slug]))
        assert 'feature_item_groups' in resp.context