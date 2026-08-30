from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.students, name='students'),
    path('create/', views.create_student, name='create_student'),
    path('update/<int:pk>/', views.update_student, name='update_student'),
]
