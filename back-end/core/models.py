from django.db import models
from phone_field import PhoneField

# Create your models here.

class React(models.Model):
    message = models.CharField(max_length=300)
    number = models.CharField(max_length=10)

