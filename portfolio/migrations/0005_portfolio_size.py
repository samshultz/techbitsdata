# Generated by Django 3.2.2 on 2021-05-14 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_auto_20210514_0843'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='size',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
