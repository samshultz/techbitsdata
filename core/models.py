from django.db import models
from django.utils.text import slugify
from django.urls import reverse

from ckeditor.fields import RichTextField


class HomePage(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=150)

    header_title = models.CharField(max_length=200)
    header_subtitle = models.CharField(max_length=150)
    header_description = RichTextField()
    header_img = models.ImageField(upload_to="homepages/")
    header_color = models.CharField(max_length=50)

    body = RichTextField(config_name="service_editor")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(HomePage, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("homepage_detail", args=[self.slug])