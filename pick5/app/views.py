from django.shortcuts import render

# Create your views here.
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
    # return render(request, 'app/index.html', context={'game_list': None})