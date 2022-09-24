from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class CustomUsarManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_('Email shoud be provided'))
    # Normalizamos el correo
        email = self.normalize_email(email)

        new_user = self.model(email=email, **extra_fields)
        new_user.set_password(password)
        new_user.save()
        return new_user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        # extra_fields.setdefault('is_activate', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_("SuperUser should have is_staff as True"))

        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_("SuperUser should have is_superuser as True"))

        # if extra_fields.get('is_activate') is not True:
        #     raise ValueError(_("SuperUser should have is_activate as True"))
        return self.create_user(email, password, **extra_fields)