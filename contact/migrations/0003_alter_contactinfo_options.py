# Generated by Django 3.2.2 on 2021-05-09 08:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0002_contactinfo'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contactinfo',
            options={'verbose_name': 'contact info', 'verbose_name_plural': 'contact info'},
        ),
    ]