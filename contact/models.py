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
    fullname = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15, blank=True, null=True)
    message = models.TextField()


    def __str__(self):
        return self.fullname