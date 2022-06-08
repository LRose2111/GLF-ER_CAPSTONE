
from django.contrib import admin
from .models import Course, Comment, Reply, Payment, Scrambles

admin.site.register(Course) 
admin.site.register(Comment) 
admin.site.register(Reply) 
admin.site.register(Payment)  
admin.site.register(Scrambles)