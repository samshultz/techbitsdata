from django.test import TestCase
from django.contrib.admin.sites import AdminSite

from django.core.files.uploadedfile import SimpleUploadedFile
from django.utils.html import mark_safe

from ..admin import PortfolioAdmin
from ..models import Portfolio, PortfolioImage



class AdminTest(TestCase):

    def test_first_photo_method_returns_img_tag_when_img_available(self):
        portfolio = Portfolio.objects.create(name="Ecommerce store",
                                        description="a very long text",
                                        url="https://www.ecommerce.com")
        img = SimpleUploadedFile("ecommerce_store.png", b"file_content", content_type="img/png")
        port_img = PortfolioImage.objects.create(portfolio=portfolio, image=img)

        portfolio_admin = PortfolioAdmin.first_photo(Portfolio, obj=portfolio)
        self.assertEqual(portfolio_admin, mark_safe(f"<img src='{portfolio.images.first().image.url}' height='120' width='120' />"))

    def test_first_photo_method_returns_empty_str_when_no_img_available(self):
        portfolio = Portfolio.objects.create(name="Ecommerce store",
                                        description="a very long text",
                                        url="https://www.ecommerce.com")
        portfolio_admin = PortfolioAdmin.first_photo(Portfolio, obj=portfolio)
        self.assertEqual(portfolio_admin, "")

    def test_get_url_returns_anchor_tag(self):
        portfolio = Portfolio.objects.create(name="Ecommerce store",
                                        description="a very long text",
                                        url="https://www.ecommerce.com")
        portfolio_admin = PortfolioAdmin.get_url(Portfolio, obj=portfolio)
        self.assertEqual(portfolio_admin, mark_safe(f"<a href={portfolio.url} target='_blank' class='button'>Go to {portfolio.name}</a>"))