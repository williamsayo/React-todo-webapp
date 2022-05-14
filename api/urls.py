from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-list'),
    path('task/', views.TaskView.as_view(), name='task-api'),
    path('task-create/', views.TaskCreateView.as_view(), name='task-create-api'),
    path('task/<str:pk>', views.taskDetailView, name='task-detail-api'),
    path('task-update/<str:pk>', views.taskUpdateView, name='task-update-api'),
     path('task-delete/<str:pk>', views.taskDeleteView, name='task-update-api'),

]