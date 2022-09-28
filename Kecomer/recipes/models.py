from django.db import models

# Create your models here.
class RecipesModel(models.Model):
    time_choice = [
        ('B', 'Breakfast'),
        ('L', 'Lunch'),
        ('D', 'Dinner')
    ]
    category_choice=[
        ('V','vegana')
        ('C', 'Carnes')
        ('P','Postres')
        ('S', 'SinTacc')
        ('PA', 'Pastas')
    ]
    title=models.CharField(max_length=255, unique=True)
    image=models.ImageField(upload_to="recipes/img", blank=True, null=True)
    link_video=models.CharField(max_length=255, blank=True, null=True)
    category=models.CharField(choices=category_choice)
    number_of_dishes=models.IntegerField(max_length=1)
    timeday= models.CharField(choices=time_choice, null=True, blank=True)
    recipes_time=models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title

#Tabla ingredientes relacionada con RecipesModel para traer nombre de receta
class Ingredients(models.Model):
    dishe_1= models.CharField(max_length=255)
    dishe_2= models.CharField(max_length=255, blank=True, null=True)
    dishe_3= models.CharField(max_length=255, blank=True, null=True)
    dishe_4= models.CharField(max_length=255, blank=True, null=True)
    dishe_5= models.CharField(max_length=255, blank=True, null=True)

class Favorites(models.Model):
    platillo=models.ForeignKey(RecipesModel,on_delete=models.CASCADE)
    ingredientes=models.ForeignKey(Ingredients, on_delete=models.CASCADE)

#class description(models.Model):
 #   name=models.ForeignKey(Ingredients, on_delete=models.CASCADE)
  #  count= models.CharField(max_length=255)
   # unit=  models.CharField(max_length=255)

