from django.db.models import fields
from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('user')
        
        #TODO ADD PRODUCT & quantity