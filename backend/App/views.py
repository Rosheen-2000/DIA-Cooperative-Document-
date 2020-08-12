from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .tools import add_data as fadd_data
from .tools import my_test as fmy_test
from . import api
import json


# Create your views here.
def add_data(request):
	fadd_data()
	return HttpResponse('添加成功')


def my_test(request):
	fmy_test()
	return HttpResponse('测试成功')


def login(request):
	name = request.POST.get('uname')
	pwd = request.POST.get('password')
	# print(name)
	# print(pwd)
	result = api.login(name, pwd)
	# print(result)
	return JsonResponse({'result': result})
	# return render(request, 'register.html', )