# Generated by Django 4.1.1 on 2022-10-17 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0013_remove_quantitymodel_quantity_quantitymodel_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quantitymodel',
            name='name',
            field=models.CharField(max_length=10),
        ),
    ]
