# Generated by Django 3.2.2 on 2021-05-13 20:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0006_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='services', to='services.category'),
        ),
    ]