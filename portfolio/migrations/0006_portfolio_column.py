# Generated by Django 3.2.2 on 2021-05-14 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0005_portfolio_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='column',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]