# Generated by Django 4.1.1 on 2022-10-17 22:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0011_remove_ingredients_dishe_2_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='QuantityModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
            ],
            options={
                'verbose_name': 'QuantityModel',
                'verbose_name_plural': 'QuantityModels',
                'ordering': ['id'],
            },
        ),
        migrations.AddField(
            model_name='recipesmodel',
            name='quantity',
            field=models.ManyToManyField(to='recipes.quantitymodel'),
        ),
    ]
