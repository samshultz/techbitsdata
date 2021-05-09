from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify

from ckeditor_uploader.fields import RichTextUploadingField


class About(models.Model):
    content = RichTextUploadingField()

    class Meta:
        verbose_name = 'about'
        verbose_name_plural = 'about'

    def __str__(self):
        return self.content[:20]

    def save(self, *args, **kwargs):
        if not self.pk and About.objects.exists():
            raise ValidationError(_("There can be only on About Company Instance"))
        return super(About, self).save(*args, **kwargs)


class AboutSection(models.Model):

    about = models.ForeignKey(About, 
                              related_name='sections', 
                              on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=150)
    content = RichTextUploadingField()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        return super(AboutSection, self).save(*args, **kwargs)


class FAQ(models.Model):
    question = models.CharField(max_length=200)
    answer = RichTextUploadingField()

    def __str__(self):
        return self.question