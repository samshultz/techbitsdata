# Generated by Django 3.2.2 on 2021-05-16 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0005_alter_contact_contact_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='current_website_url',
            field=models.URLField(blank=True, default=''),
            preserve_default=False,
        ),
    ]
