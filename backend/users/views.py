from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework import generics
from django.contrib.auth.models import User
from .serializer import UserSerializer

# Create your views here.

class CreateUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]