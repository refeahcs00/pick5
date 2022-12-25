from django.contrib.auth import views as auth_views
from django.urls import path

from . import views

urlpatterns = [
    path('accounts/login/', auth_views.LoginView.as_view()),
    path('', views.index, name='index'),
]