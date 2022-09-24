from django.db import models
from django.contrib.auth.models import AbstractUser
from users.customuser import CustomUsarManager


class User(AbstractUser):

    genre_choice = [
        ('M', 'Male'),
        ('F', 'Fale'),
    ]

    username = models.CharField(max_length=25, unique=True)
    email = models.EmailField(max_length=80, unique=True)
    avatar = models.ImageField(upload_to='user/users', null=True, blank=True)
    date_of_birth = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    genre = models.CharField(choices=genre_choice, null=True, blank=True, max_length=4)
    country = models.CharField(max_length=100, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    #configuracion 1 "setting2"
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username']

    objects = CustomUsarManager() # para crear correctamente nuestros usuarios

    def __str__(self):
        return f"<User {self.email}"