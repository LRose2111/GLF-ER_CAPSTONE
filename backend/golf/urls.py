from django.urls import path

from . import views

urlpatterns = [
    path('course/', views.CoursesActions.as_view()),
    path('comment/', views.CommentActions.as_view()),
    path('course/<int:pk>/', views.CourseLike.as_view()),
    path('comment/reply/<int:pk>/', views.ReplyDetails.as_view()),
    path('payment/', views.PaymentPost.as_view()),
    path('scrambles/', views.Scrambles.as_view()),
    path('create/', views.CreateListing.as_view())
]


