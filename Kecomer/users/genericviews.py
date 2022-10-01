from users.serializers import UserCreationSerializer, UsersSerializers
from rest_framework.generics import ListAPIView
from users.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet


  
class ClientViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsersSerializers

    

    