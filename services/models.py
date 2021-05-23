from django.db import models
from django.utils.text import slugify
from django.urls import reverse

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
    
    class Meta:
        ordering = "id",


    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(Service, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("services:service_detail", args=[self.slug])


class Feature(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=200)

    features_list_title = models.CharField(max_length=30, blank=True, null=True)
    features_list_description = models.CharField(max_length=255, blank=True, null=True)

    header_title = models.CharField(max_length=100, default="")
    header_subtitle = models.CharField(max_length=150, default="")
    header_description = RichTextField()
    header_img = models.ImageField(upload_to="features")
    header_color = models.CharField(max_length=50)

    banner = models.ImageField(upload_to='banner', blank=True, null=True)

    body = RichTextField(config_name="service_editor")


    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(Feature, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('services:feature_detail', args={self.slug})


class FeatureItem(models.Model):
    feature = models.ForeignKey(Feature, related_name='feature_items', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        ordering = "-id",
