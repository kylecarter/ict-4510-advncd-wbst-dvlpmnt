from django import forms


class ContactForm( forms.Form ):
    error_css_class = 'form-error'
    required_css_class = 'form-control-required'

    full_name = forms.CharField( required=True, max_length=255, attrs={
        'placeholder': 'John Doe',
        'class': 'form-control',
        'required': 'required'
    })

    email = forms.EmailField( required=True, attrs={
        'placeholder': 'email@domain.com',
        'class': 'form-control',
        'required': 'required'
    })

    message = forms.CharField( required=True, widget=forms.Textarea, attrs={
        'placeholder': 'Hi, how are you?',
        'class': 'form-control',
        'required': 'required'
    })