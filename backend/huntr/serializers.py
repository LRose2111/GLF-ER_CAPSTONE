
from rest_framework import serializers
from .models import Listing, Review

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['id', 'name', 'address', 'city', 'state', 'zipcode', 'price']
        depth = 1


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ['id', 'text', 'listing_id', 'user']
        depth = 1
    