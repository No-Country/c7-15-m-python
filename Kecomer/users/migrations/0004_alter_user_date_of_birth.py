# Generated by Django 4.1.1 on 2022-09-30 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_user_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='date_of_birth',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
