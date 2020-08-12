from django.urls import path
from App import views

app_name = 'APP'

urlpatterns = [
	path('add_data/', views.add_data, name='add_data'),
	path('my_test/', views.my_test, name='my_test'),
	path('passport/login/', views.login, name='login'),
	path('passport/check/', views.check_uname, name='check_uname')
]