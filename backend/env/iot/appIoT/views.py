from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json
from django.http import HttpResponse
def home(request):
    pass
@csrf_exempt
@require_POST
def upLink(request):
    print("**********************uplink")
    if 'event' in request.GET:
        event = str(request.GET['event'])
        if event == 'up' :
            print("*********************up")
            try :
                print("*************************try")
                data = json.loads(request.body)
                print(data)
                
            except:
                print('chirpstack integration error')
    
    return HttpResponse(status=200)
# Create your views here.
