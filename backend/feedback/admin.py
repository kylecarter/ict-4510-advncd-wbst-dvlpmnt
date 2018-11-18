from django.contrib import admin

from .models import Conversation

# Register your models here.
class ConversationAdmin( admin.ModelAdmin ):
    list_display = ['id', 'contact', 'created_date', 'modified_date']
    readonly_fields = ['contact', 'email', 'message', 'created_date', 'modified_date']

admin.site.register( Conversation, ConversationAdmin )
