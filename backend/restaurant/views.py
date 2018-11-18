from django.views.generic import View
from django.http import JsonResponse

from .models import Course, Entree


# Create your views here.
class Menu( View ):
    model = Course

    def get( self, request, *args, **kwargs ):
        courses = Course.objects.all().order_by('weight')
        menu = []

        for course in courses:
            menu.append({
                'course': course.title,
                'course_id': course.id,
                'items': list( Entree.objects.filter( course__id=course.id ).values() )
            })
        
        return JsonResponse({'menu': menu})
