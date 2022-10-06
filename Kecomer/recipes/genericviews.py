from rest_framework.viewsets import ModelViewSet
from .models import RecipesModel
from .serializer import RecipesSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics

class RecipesViewset(ModelViewSet):
    serializer_class=RecipesSerializer
    queryset=RecipesModel.objects.all()

class RecipesSearch(generics.ListAPIView):
    queryset = RecipesModel.objects.all()
    serializer_class = RecipesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title','ingredients']