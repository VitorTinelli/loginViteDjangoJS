from rest_framework import serializers
from login.models import Cadastro

class CadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadastro
        fields = ('id','nome','cpf', 'email',)