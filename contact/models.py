from django.db import models


class ContactInfo(models.Model):
    """Contact Info of the Company"""

    phone = models.CharField(max_length=15)
    email = models.EmailField()

    class Meta:
        verbose_name='contact info'
        verbose_name_plural = 'contact info'

    def __str__(self):
        return self.email


class Contact(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    organization = models.CharField(max_length=150)
    contact_email = models.EmailField(blank=True)
    contact_phone = models.CharField(max_length=16)
    current_website_url = models.URLField(blank=True)
    message = models.TextField()


    def __str__(self):
        return f"{self.firstname} {self.lastname}"