from django.shortcuts import render
from django.http import HttpResponseForbidden, JsonResponse

# Create your views here.
def verify( request ):

    if request.method != 'GET':
        return HttpResponseForbidden()

    return JsonResponse({ 'msg': 'API V1 available' })
