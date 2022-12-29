# Generated by Django 4.1.4 on 2022-12-29 05:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('abbreviation', models.CharField(max_length=3, unique=True)),
                ('name', models.CharField(max_length=50, unique=True)),
                ('active', models.BooleanField(blank=True, default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('week', models.CharField(choices=[(1, 'Week 1'), (2, 'Week 2'), (3, 'Week 3'), (4, 'Week 4'), (5, 'Week 5'), (6, 'Week 6'), (7, 'Week 7'), (8, 'Week 8'), (9, 'Week 9'), (10, 'Week 10'), (11, 'Week 11'), (12, 'Week 12'), (13, 'Week 13'), (14, 'Week 14'), (15, 'Week 15'), (16, 'Week 16'), (17, 'Week 17'), (18, 'Week 18')], max_length=8)),
                ('spread', models.DecimalField(decimal_places=1, max_digits=3)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='app.team')),
            ],
        ),
    ]
