# Generated by Django 4.1.4 on 2022-12-29 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='game_id',
            field=models.IntegerField(blank=True, default=1),
            preserve_default=False,
        ),
    ]
