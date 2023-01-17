import uuid

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Team(models.Model):
    abbreviation = models.CharField(max_length=3, null=False, blank=False, unique=True)
    name = models.CharField(max_length=50, null=False, blank=False, unique=True)


class Lines(models.Model):
    home_spread = models.DecimalField(null=False, blank=False, max_digits=3, decimal_places=1)
    away_spread = models.DecimalField(null=False, blank=False, max_digits=3, decimal_places=1)
    over = models.DecimalField(null=True, blank=True, max_digits=4, decimal_places=1)
    under = models.DecimalField(null=True, blank=True, max_digits=4, decimal_places=1)


class Season(models.Model):
    start = models.DateField(null=False)
    end = models.DateField(null=False)


class Match(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    away_team = models.ForeignKey(to=Team, related_name='+', on_delete=models.DO_NOTHING)
    home_team = models.ForeignKey(to=Team, related_name='+', on_delete=models.DO_NOTHING)
    lines = models.ForeignKey(to=Lines, on_delete=models.DO_NOTHING)
    away_score = models.IntegerField(null=False, blank=False, default=0)
    home_score = models.IntegerField(null=False, blank=False, default=0)
    season = models.ForeignKey(to=Season, on_delete=models.CASCADE)
    week = models.IntegerField(null=False, blank=False, choices=[(i, f'Week {i}') for i in range(1, 19)])
    finished = models.BooleanField(null=False, default=False)


class Pick(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    team = models.ForeignKey(to=Team, on_delete=models.DO_NOTHING)
    match = models.ForeignKey(to=Match, on_delete=models.DO_NOTHING)
    user = models.ForeignKey(to=User, on_delete=models.DO_NOTHING)
