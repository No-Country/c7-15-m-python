# Generated by Django 4.1.1 on 2022-10-17 23:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0016_alter_instructionmodel_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipesmodel',
            name='instruction',
            field=models.ManyToManyField(to='recipes.instructionmodel'),
        ),
    ]
