from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from login.views import CadastroViewSet, Login_view

router = routers.DefaultRouter()
router.register(r'cadastros', CadastroViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', Login_view, name='login'),
    path('', include(router.urls)),
]
