from django.db import models
from ckeditor.fields import RichTextField



class Portfolio(models.Model):
    name = models.CharField(max_length=200)
    description = RichTextField()
    url = models.URLField()
    location = models.CharField(max_length=30, blank=True, null=True)
    logo = models.ImageField(upload_to="portfolio/logo/", null=True, blank=True)

    position = models.CharField(max_length=10, blank=True, null=True)
    row = models.CharField(max_length=10, blank=True, null=True)
    size = models.CharField(max_length=30, blank=True, null=True)
    column = models.CharField(max_length=30, blank=True, null=True)
    
    def __str__(self):
        return self.name

    class Meta:
        ordering = "-id",


class PortfolioImage(models.Model):
    portfolio = models.ForeignKey(Portfolio, 
                                  related_name="images", 
                                  on_delete=models.CASCADE)
    image = models.ImageField(upload_to="portfolio/")

