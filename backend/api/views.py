from django.shortcuts import render

# Create your views here.
def verify( request ):

    if request.method != 'GET':
        return HttpResponseForbidden()

    return JsonResponse({ 'msg': 'API V1 available' })
