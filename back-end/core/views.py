from django.shortcuts import render
from rest_framework.views import APIView
from .models import React
from rest_framework.response import Response
from .serializer import ReactSerializer
from twilio.rest import Client
# Create your views here.

class ReactView(APIView):
    serializer_class = ReactSerializer
    # queryset = React.objects.all()
    def __init__(self):
        self.to = "+18126508996"
        self.fromm = "+12565968234"
        self.client = Client("ACde219cfe53c77ee8a49a09c67aac1a65", "a8781a622c5e83bafadd90141cab6347")

    def get(self, request):
        detail1 = [{"number":message.number, "message":message.message} for message in React.objects.all()]

        return Response(detail1)
    
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        
        print('------------------------------------------')
        print(request.data['number'])
        print('------------------------------------------')

        # message = self.client.messages.create(to = '+1'+request.data['number'], from_=self.fromm, body = request.data['message'])
        # print(message.sid)
        if serializer.is_valid(raise_exception=True):
            print(serializer.data)
        #     serializer.save()
        #     print(serializer.data)
        #     return Response(serializer.data)


