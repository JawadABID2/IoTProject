from django.db import models
from django.contrib.auth.models import User
from django_extensions.db.fields.json import JSONDict
class Devices(models.Model):
    dev_eui = models.CharField(max_length=128)
    dev_name = models.CharField(max_length=128)
    network_server = models.CharField(max_length=128, default='network_server')
    gateway_server = models.CharField(max_length=128, default='gateway')
    network_server_app = models.CharField(max_length=128, default='network_server_app')
    dev_measures = JSONDict()
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,

    )
    dt = models.DateTimeField(auto_now=True, null=True)
    time=models.TimeField(auto_now=True)

    def __str__(self):
        return self.dev_name
    

class WsSensecap(models.Model):
    dev_eui = models.CharField(max_length=128)
    dev_name = models.CharField(max_length=128)
    Temp = models.FloatField(null = True)
    Hum = models.FloatField(null = True)
    WindSpeed = models.FloatField(null = True)
    WindDirection = models.FloatField(null = True)
    Rainfall  = models.FloatField(null = True)
    Light = models.FloatField(null = True)
    UV = models.FloatField(null = True)
    Pressure = models.FloatField(null = True)
    Bat = models.FloatField(null = True)
    dt = models.DateTimeField(auto_now=True, null=True)
    time=models.TimeField(auto_now=True)
    def __str__(self):
        return f"WS Data - Date: {self.dt}, Time: {self.time}"

class Coldchaine(models.Model):
    dev_eui = models.CharField(max_length=128)
    dev_name = models.CharField(max_length=128)
    temperature = models.FloatField(null = True)
    ambient_temperature = models.FloatField(null = True)
    voltage = models.FloatField(null = True)
    battery = models.FloatField(null = True)
    dt = models.DateTimeField(auto_now=True, null=True)
    time=models.TimeField(auto_now=True)
    def __str__(self):
        return f"WS Data - Date: {self.dt}, Time: {self.time}"




