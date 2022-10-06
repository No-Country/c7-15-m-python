from users.serializers import UsersSerializers
from users.models import User
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions


  
class ClientViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsersSerializers
    #permission_classes = [permissions.IsAdminUser]





    