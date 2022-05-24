from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListingActions),
    path('<str:id>/', views.ReviewActions),
    
    
]