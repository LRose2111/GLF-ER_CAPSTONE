from dataclasses import field
from rest_framework import serializers
from .models import Listing, Review
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['id', 'name', 'address', 'city', 'state', 'zipcode', 'price']
        depth = 1


class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(many =False, read_only=True)
    class Meta:
        model = Review
        fields = ['id', 'text', 'listing_id', 'user']
        depth = 1
    