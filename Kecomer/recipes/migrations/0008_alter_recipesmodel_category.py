# Generated by Django 4.1.1 on 2022-10-17 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0007_remove_recipesmodel_number_of_dishes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipesmodel',
            name='category',
            field=models.CharField(choices=[('VEGANA', 'Vegana'), ('CARNE', 'Carne'), ('POSTRE', 'Postre')], max_length=12),
        ),
    ]
