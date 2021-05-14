# Generated by Django 3.2.2 on 2021-05-13 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0005_feature'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
    ]
