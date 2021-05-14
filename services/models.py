from django.db import models
from django.utils.text import slugify

from ckeditor.fields import RichTextField

class Category(models.Model):
    name = models.CharField(max_length=40)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Service(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField()
    sub_title = models.CharField(max_length=250, blank=True, null=True)
    category = models.ForeignKey(Category, related_name='services', on_delete=models.CASCADE, null=True, blank=True)

    header_description = RichTextField()
    header_image = models.ImageField(upload_to="services/")
    header_color = models.CharField(max_length=30, blank=True, null=True)
    
    body = RichTextField(config_name="service_editor", default="")



    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(Service, self).save(*args, **kwargs)


class Feature(models.Model):
    name = models.CharField(max_length=100)
    sub_title = models.CharField(max_length=150)
    slug = models.SlugField(max_length=200)

    header_description = RichTextField()
    header_img = models.ImageField(upload_to="features")
    header_color = models.CharField(max_length=50)

    body = RichTextField(config_name="service_editor")


    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(Feature, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return ('')