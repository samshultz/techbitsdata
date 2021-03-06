import pytest
from ..models import Service, Feature, Category, FeatureItem

@pytest.fixture
def create_service(db):
    service = Service.objects.create(name="Web design",
                                     header_description="a long description")
    return service

def test_str_representation_of_service(create_service):
    assert "Web design" == str(create_service)

def test_service_get_absolute_url(create_service):
    assert "/services/web-design/" == create_service.get_absolute_url()

def test_slug_automatically_created(create_service):
    assert "web-design" == create_service.slug

def test_str_representation_of_feature(db):
    feature = Feature.objects.create(name="Online Payments Processing")
    assert "Online Payments Processing" == str(feature)

def test_slug_automatically_filled_in(db):
    feature = Feature.objects.create(name="Online Payments Processing")
    assert "online-payments-processing" == feature.slug

def test_str_representation_of_category(db):
    cat = Category.objects.create(name="Web Design")
    assert "Web Design" == str(cat)

def test_verbose_name_plural_of_category(db):
    cat = Category._meta.verbose_name_plural
    assert "Categories" == cat

def test_str_representation_of_feature_item(db):
    feature = Feature.objects.create(name="Online Payments Processing")
    feature_item = FeatureItem.objects.create(feature=feature, name="online payments")
    assert "online payments" == str(feature_item)

def test_get_absolute_url_of_feature(db):
    feature = Feature.objects.create(name="Online Payments Processing")
    assert "/services/features/online-payments-processing/" == feature.get_absolute_url()