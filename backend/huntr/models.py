from django.db import models
from authentication.models import User

class Listing(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255) 
    state = models.CharField(max_length=25)
    zipcode = models.CharField(max_length=25)
    price = models.CharField(max_length=25)

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  
    text = models.CharField(max_length=255)
    listing_id = models.IntegerField()



