from rest_framework import viewsets
from login.models import Cadastro
from login.serializer import CadastroSerializer
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


class CadastroViewSet(viewsets.ModelViewSet):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer

@csrf_exempt
def Login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')


    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'message': 'Login successful'})
    else:
        return JsonResponse({'message': 'Login failed'}, status=401)