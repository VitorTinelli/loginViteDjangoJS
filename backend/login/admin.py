from django.contrib import admin
from login.models import Cadastro

class Cadastros(admin.ModelAdmin):
    list_display = ('id', 'nome', 'cpf', 'email')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', 'cpf',)

admin.site.register (Cadastro, Cadastros)