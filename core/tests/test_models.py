from ..models import HomePage


def test_str_representation_of_homepage(db):
    homepage = HomePage.objects.create(name="Real Estate")
    assert "Real Estate" == str(homepage)

def test_slug_automatically_filled_in(db):
    homepage = HomePage.objects.create(name="Real Estate")
    assert "real-estate" == homepage.slug