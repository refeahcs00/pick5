from django.db import models

# Create your models here.
class Team(models.Model):
    abbreviation = models.CharField(max_length=3, null=False, blank=False, unique=True)
    name = models.CharField(max_length=50, null=False, blank=False, unique=True)
    active = models.BooleanField(null=False, blank=True, default=True)

    def __str__(self):
        return self.abbreviation


class Game(models.Model):
    WEEK_CHOICES = [(x, f'Week {x}') for x in range(1, 19)]

    game_id = models.IntegerField(null=False, blank=True)
    week = models.CharField(max_length=8, null=False, blank=False, choices=WEEK_CHOICES)
    spread = models.DecimalField(null=False, blank=False, max_digits=3, decimal_places=1)
    team = models.ForeignKey(to='Team', null=False, blank=False, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f'{self.week}: {self.team.abbreviation} ({self.spread})'
