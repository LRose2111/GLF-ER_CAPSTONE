from django.urls import path
from huntr import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.UserListings),
    path('all/', views.GetAllListings),
    path('review/<int:pk>/', views.ReviewActions.as_view()),
    path('listings/<int:pk>/', views.ListingLike.as_view()),
    path('review/reply/<int:pk>/', views.ReplyDetails.as_view()),
   
]

