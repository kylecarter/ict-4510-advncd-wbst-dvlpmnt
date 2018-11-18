from django.db import models

# Create your models here.
class Conversation( models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    contact = models.CharField( max_length=255, verbose_name=u"Full Name", help_text=u"Name of the contact" )
    email = models.EmailField( max_length=255, verbose_name=u"Email", help_text=u"Contact email." )
    message = models.TextField( verbose_name=u"Message", help_text=u"Message provided by the contact." )
    resolution = models.TextField( blank=True, null=True, verbose_name=u"Resolution", help_text=u"Resolution if any for the conversation." )
