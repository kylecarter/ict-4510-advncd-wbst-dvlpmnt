from django.db import models

# Create your models here.
class Conversation( models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    contact = models.CharField( max_length=255, verbose_name=u"Full Name", help_text=u"Name of the contact" )
    email = models.CharField( max_length=255, verbose_name=u"Title", help_text=u"Name of the Entree" )