from django.db import models

class Cadastro(models.Model):
    nome = models.CharField(max_length= 30)
    cpf = models.BigIntegerField()
    email = models.EmailField()

    def __str__(self):
        return self.nome