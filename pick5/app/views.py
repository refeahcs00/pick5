from django.shortcuts import render
from .models import Team

# Create your views here.
def index(request):
    return render(request, 'app/index.html', context={'game_list': None})
