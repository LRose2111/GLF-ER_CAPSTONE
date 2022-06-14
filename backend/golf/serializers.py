from dataclasses import field
from rest_framework import serializers
from .models import Comment, Course, Reply, Payment, Scrambles
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course 
        fields = ['id', 'name', 'address', 'city', 'state', 'zipcode', 'likes', 'dislikes']
        depth = 1


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(many =False, read_only=True)
    class Meta:
        model = Comment
        fields = ['id', 'text', 'user']
        depth = 1
    
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'cardnumber', 'expdate', 'cvcnumber', 'user']
        depth = 1


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'text', 'comment_id', 'user_id']
        depth = 1

    comment_id = serializers.IntegerField(write_only = True)

class ScramblesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scrambles
        fields = ['id', 'date', 'location']
        depth = 1