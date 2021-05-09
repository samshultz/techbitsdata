from django.db import models
from ckeditor.fields import RichTextField


class Portfolio(models.Model):
    name = models.CharField(max_length=200)
    description = RichTextField()
    url = models.URLField()
    image = models.ImageField(upload_to="portfolio/")


    def __str__(self):
        return self.name