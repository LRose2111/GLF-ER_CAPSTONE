from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListingActions),
    path('', views.ReviewActions),
    
]