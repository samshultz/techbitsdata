# Generated by Django 3.2.2 on 2021-05-15 11:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0007_service_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='FeatureItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('feature', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='feature_items', to='services.feature')),
            ],
            options={
                'ordering': ('-id',),
            },
        ),
    ]