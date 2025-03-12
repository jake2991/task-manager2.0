from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = 'title', 'content', 'id', 'author', 'created_at'
        extra_kwargs = {"author": {"read_only": True}}