from django.db import models

# Create your models here.
class Course( models.Model):
    title = models.CharField( max_length=255, verbose_name=u"Title", help_text=u"Name that will be shown for the menu section" )
    weight = models.IntegerField( default=0, verbose_name=u"Weight", help_text=u"The order to display the sections in. Smaller \
        numbers will appear first.")

    def __str__( self ):
        return "{0}<{1}>".format( self.title, self.id )

class Entree( models.Model ):
    title = models.CharField( max_length=255, verbose_name=u"Title", help_text=u"Name of the Entree" )
    description = models.TextField( verbose_name=u"Description", help_text=u"A description of the dish." )
    price = models.DecimalField( max_digits=7, decimal_places=2, verbose_name="Price",
        help_text="The cost in dollars for the Entree.")
    image = models.ImageField( blank=True, null=True, verbose_name="Picture", help_text="An image of the dish to show with \
        the description")
    course = models.ForeignKey( 'Course', on_delete=models.CASCADE, verbose_name="Course", help_text="The section of the menu the Entree will appear.")

    def __str__( self ):
        return "{0}<{1}>".format( self.title, self.id )
