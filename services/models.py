from django.db import models
from django.utils.text import slugify

from ckeditor.fields import RichTextField


class Service(models.Model):
    name = models.CharField(max_length=200)
    description = RichTextField()
    slug = models.SlugField()

    image = models.ImageField(upload_to="services/")


    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(Service, self).save(*args, **kwargs)