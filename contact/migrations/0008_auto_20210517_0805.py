# Generated by Django 3.2.2 on 2021-05-17 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0007_auto_20210517_0753'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactinfo',
            name='facebook_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='contactinfo',
            name='linkedin_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='contactinfo',
            name='twitter_url',
            field=models.URLField(blank=True),
        ),
    ]
