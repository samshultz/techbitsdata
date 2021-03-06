# Generated by Django 3.2.2 on 2021-05-13 09:29

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0002_service_slug'),
    ]

    operations = [
        migrations.RenameField(
            model_name='service',
            old_name='description',
            new_name='header_description',
        ),
        migrations.RenameField(
            model_name='service',
            old_name='image',
            new_name='header_image',
        ),
        migrations.AddField(
            model_name='service',
            name='body',
            field=ckeditor.fields.RichTextField(default=''),
        ),
        migrations.AddField(
            model_name='service',
            name='sub_title',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
