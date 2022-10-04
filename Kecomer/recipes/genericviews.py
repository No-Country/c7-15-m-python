from rest_framework.viewsets import ModelViewSet
from .models import RecipesModel
from .serializer import RecipesSerializer

class RecipesViewset(ModelViewSet):
    serializer_class=RecipesSerializer
    queryset=RecipesModel.objects.all()