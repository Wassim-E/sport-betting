from django.contrib import admin
from django.urls import path
from .views import ExternalAPIView

urlpatterns = [
    path('test/', ExternalAPIView.as_view(), name='external-api'),
]