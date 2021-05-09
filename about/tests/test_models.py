import pytest
from django.core.exceptions import ValidationError
from ..models import About, AboutSection, FAQ


def test_str_representation_about(db):
    about = About.objects.create(content="A very long text. How far?")
    assert "A very long text. Ho" == str(about)

def test_verbose_name_plural_about(db):
    verbose_name = About._meta.verbose_name_plural

    assert "about" == verbose_name

def test_str_representation_about_sections(db):
    about = About.objects.create(content="A very long text. How far?")
    about_section = AboutSection.objects.create(about=about, 
                                                title="Who we are",
                                                content="This is who we are.")
    assert "Who we are" == str(about_section)

def test_slug_automatically_created_for_sections(db):
    about = About.objects.create(content="A very long text. How far?")
    about_section = AboutSection.objects.create(about=about, 
                                                title="Who we are",
                                                content="This is who we are.")
    assert "who-we-are" == about_section.slug
    
def test_only_one_about_instance_can_be_created(db):
    About.objects.create(content="A very long text. How far?")

    with pytest.raises(ValidationError):
        About.objects.create(content="Another long Text")

def test_str_representation_for_FAQ(db):
    faq = FAQ.objects.create(question="how much do you charge", answer="50000")

    assert "how much do you charge" == str(faq)