from django.contrib import admin
from .models import Course, Entree

# Register your models here.
class CourseAdmin( admin.ModelAdmin ):
    list_display = ['title', 'weight']

class EntreeAdmin( admin.ModelAdmin ):
    list_display = ['title', 'description', 'price', 'course', 'image']

admin.site.register( Course, CourseAdmin )
admin.site.register( Entree, EntreeAdmin )