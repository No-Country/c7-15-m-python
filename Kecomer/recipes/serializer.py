from rest_framework import serializers
from .models import RecipesModel


class RecipesSerializer(serializers.ModelSerializer):
    ingredients = serializers.SerializerMethodField()

    def get_ingredients(self, instance):
        queryset = instance.ingredients.get_queryset()
        names = [ingredient.dishe_1 for ingredient in queryset]
        return names

    class Meta:
        model = RecipesModel
        fields = ["title", "link_video", "image", "category", "timeday", "like", "description",'ingredients']