import os

from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Contact, ContactInfo

from django.core.mail import mail_admins


@receiver(post_save, sender=Contact)
def send_contact_email(sender, instance, created, **kwargs):

    if created:
        
        subject = f"Message from {instance.contact_email}"
        from_email = os.environ.get("EMAIL_HOST_USER")
        to_email = instance.contact_email
        
        message = f"Dear Admin,\n\nMy name is {str(instance)}({to_email}),"
        message += f" and my phone number is {instance.contact_phone}.\n\n"

        if instance.organization:
            message += f"I work at {instance.organization}.\n\n"
        message += f"{instance.message}"
        
        mail_admins(subject, message)