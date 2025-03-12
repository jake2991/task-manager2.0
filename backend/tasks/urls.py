from django.urls import path
from . import views

urlpatterns = [
    path('', views.TaskListCreate.as_view(), name='task-list'),
    path('delete/<int:pk>/', views.TaskDelete.as_view(), name='task-delete'),
    path('update/<int:pk>', views.TaskUpdate.as_view(), name='update'),
]
