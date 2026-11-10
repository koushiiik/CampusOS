from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import CustomUser
from .serializers import RegisterSerializer, UserSerializer
from .permissions import IsAdmin

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer

class CreateStaffView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (IsAdmin,)
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        role = request.data.get('role', 'faculty')
        serializer = self.get_serializer(data=request.data, context={'role': role})
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(UserSerializer(user).data, status=201)

class UserDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        return self.request.user