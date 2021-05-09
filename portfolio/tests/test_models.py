from portfolio.models import Portfolio


def test_str_representation_of_porfolio(db):
    portfolio = Portfolio.objects.create(name="Ecommerce store",
                                        description="a very long text",
                                        url="https://www.ecommerce.com")
    assert "Ecommerce store" == str(portfolio)