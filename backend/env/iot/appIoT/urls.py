from django.urls import path
from appIoT import views

urlpatterns = [
    path('', views.home, name='home'),
    path('upLink', views.upLink, name='upLink'),
]