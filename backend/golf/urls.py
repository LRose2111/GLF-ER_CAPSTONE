from django.urls import path
from . import views

urlpatterns = [
    path('course/', views.CoursesActions.as_view()),
    path('comment/<int:pk>/', views.CommentActions.as_view()),
    path('course/<int:pk>/', views.CourseLike.as_view()),
    path('comment/reply/<int:pk>/', views.ReplyDetails.as_view()),
    path('payment/', views.PaymentPost.as_view()),
    path('scrambles/', views.Scrambles.as_view()),
]