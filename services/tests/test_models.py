import pytest
from ..models import Service

@pytest.fixture
def create_service(db):
    service = Service.objects.create(name="Web design",
                                     description="a long description")
    return service

def test_str_representation_of_service(create_service):
    assert "Web design" == str(create_service)

def test_slug_automatically_created(create_service):
    assert "web-design" == create_service.slug