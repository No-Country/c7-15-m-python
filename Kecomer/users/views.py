from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from users.serializers import UserCreationSerializer
from drf_yasg.utils import swagger_auto_schema


class UserCreateView(GenericAPIView):

    serializer_class = UserCreationSerializer

    @swagger_auto_schema(operation_summary="Create user", operation_description="This endpoint creates a users")
    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
