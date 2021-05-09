from ..models import Contact, ContactInfo

def test_str_representation_of_contact(db):
    contact = Contact.objects.create(fullname="John Doe")
    assert "John Doe" == str(contact)

def test_str_representation_of_contact_info(db):
    contact_info = ContactInfo.objects.create(phone="+23488138045380",
                                              email="admin@site.com")
    assert "admin@site.com" == str(contact_info)


def test_verbose_name_plural_contact_info(db):

    contact_info = ContactInfo._meta.verbose_name_plural
    assert "contact info" == contact_info
    