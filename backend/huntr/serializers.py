from dataclasses import field
from rest_framework import serializers
from .models import Listing, Reply, Review
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['id', 'user', 'name', 'address', 'city', 'state', 'zipcode', 'likes', 'dislikes']
        depth = 1


class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(many =False, read_only=True)
    class Meta:
        model = Review
        fields = ['id', 'text', 'listing_id', 'user']
        depth = 1
    

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'text', 'comment_id', 'user_id']
        depth = 1

    comment_id = serializers.IntegerField(write_only = True)

   
