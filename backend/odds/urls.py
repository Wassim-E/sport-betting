from django.contrib import admin
from django.urls import path
from .views import ParionsSportBets

urlpatterns = [
    path('parionssportbets/', ParionsSportBets.as_view(), name='parionssportbets'),
]