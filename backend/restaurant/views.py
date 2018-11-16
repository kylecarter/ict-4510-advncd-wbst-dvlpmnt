import json

from django.shortcuts import render, get_object_or_404
from django.views.generic import View
from django.http import JsonResponse

from .models import Course, Entree
from .forms import ContactForm


# Create your views here.
class Menu( View ):
    model = Course

    def get( self, request, *args, **kwargs ):
        courses = Course.objects.all().order_by('weight')
        menu = []

        for course in courses:
            menu.append({
                'course': course.title,
                'items': list( Entree.objects.filter( course__id=course.id ).values() )
            })
        
        return JsonResponse({'menu': menu})

# class ServerContactForm( View ):


class HandleContactForm( View ):

    def post( self, request, *args, **kwargs ):
        is_ajax = request.is_ajax()

        if not is_ajax:
            return JsonResponse({'message': 'This is not allowed.'}, status=403)
        
        data = json.loads(request.body)
        form = ContactForm(data or None)
        valid = form.is_valid()

        if valid:
            res = {
                'status': 200,
                'message': 'Thank you for your submission.'
            }
            return JsonResponse(res, status=200)
        else:
            return JsonResponse(form.errors.as_json(), status=400)