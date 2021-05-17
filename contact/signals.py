import os

from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Contact, ContactInfo

from django.core.mail import send_mail


@receiver(post_save, sender=Contact)
def send_contact_email(sender, instance, created, **kwargs):

    if created:
        
        subject = "Please Verify Transfer"
        from_email = os.environ.get("EMAIL_HOST_USER")
        to_email = instance.contact_email
        
        message = f"Dear Admin,\n\nMy name is {str(instance)}({to_email}),"
        message += f" and my phone number is {instance.contact_phone}.\n\n"

        if instance.organization:
            message += f"I work at {instance.organization}.\n\n"
        message += f"{instance.message}"
        
        send_mail(subject, message, from_email, [to_email])