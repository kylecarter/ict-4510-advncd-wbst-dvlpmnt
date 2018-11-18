from django.views.generic import View
from django.http import JsonResponse

from .models import Course, Entree
from .forms import ContactForm


# Create your views here.
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