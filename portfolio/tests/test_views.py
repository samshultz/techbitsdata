from django.test import TestCase
from django.urls import reverse


class ProjectListViewTest(TestCase):

    def test_get_context_data(self):
        resp = self.client.get(reverse("portfolio:projects"))
        assert 'project_group' in resp.context