# Generated by Django 3.2.2 on 2021-05-09 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='slug',
            field=models.SlugField(default=''),
            preserve_default=False,
        ),
    ]
