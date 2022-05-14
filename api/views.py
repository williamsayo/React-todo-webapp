from django.shortcuts import redirect, render
from rest_framework import status
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from.models import Task
from .serializers import TaskSerializer

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/task/',
        'Detail':'/task/<str:pk>',
        'create':'/task-create/',
        'update':'/task-update/<str:pk>',
        'Delete':'/task-delete/<str:pk>',
    }
    return Response(api_urls)

class TaskView(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskCreateView(generics.CreateAPIView):
    serializer_class = TaskSerializer


@api_view(['GET'])
def taskDetailView(request,pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(task,many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['PUT'])
def taskUpdateView(request,pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def taskDeleteView(request,pk):
    task = Task.objects.get(id=pk)
    task.delete()
        
    return Response(status=status.HTTP_204_NO_CONTENT)