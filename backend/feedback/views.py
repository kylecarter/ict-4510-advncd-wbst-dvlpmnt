import json

from django.views.generic import View
from django.http import JsonResponse

from .models import Conversation
from .forms import ContactForm


# Create your views here.
class HandleContactForm( View ):

    def post( self, request, *args, **kwargs ):
        is_ajax = request.is_ajax()

        if not is_ajax:
            return JsonResponse({'message': 'This is not allowed.'}, status=403)

        data = {}
        for key in request.POST:
            data[key] = request.POST[key]

        form = ContactForm(data or None)
        if form.is_valid():
            c = Conversation.objects.create(contact=form.cleaned_data['contact'],
                email=form.cleaned_data['email'], message=form.cleaned_data['message'])

            res = {
                'status': 200,
                'message': 'Thank you for your submission.'
            }
            return JsonResponse(res, status=200)

        else:
            return JsonResponse(form.errors.as_json(), status=400)