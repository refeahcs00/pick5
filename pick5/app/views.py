from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login

# Create your views here.
def login(request):
    username = request.POST.get('username')
    print(f'{username}')
    password = request.POST.get('password')
    print(f'{password}')
    user = authenticate(request=request, username=username, password=password)
    if user:
        login(request, user)

        return redirect('/')
    else:
        print('Unable to log in user')

    return render(request, 'registration/login.html', context={})


@login_required
def index(request):
    game_list = [
        {
            'away': {'team': 'Steelers', 'score': 24},
            'home': {'team': 'Raiders', 'score': 21},
        },
        {
            'away': {'team': 'Jaguars', 'score': 19},
            'home': {'team': 'Jets', 'score': 3},
        },
    ]

    return render(request, 'app/index.html', context={'game_list': game_list})
