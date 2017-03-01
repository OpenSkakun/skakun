from django.shortcuts import get_object_or_404, render


def index(request):
    data = {
        "ip": '192.168.1.1',
        "online": 'text'
    }
    return render(request, 'demo/index.j2', {'data': data})


def index2(request):
    data = {
        "ip": '192.168.1.1',
        "online": 'text'
    }
    return render(request, 'demo/index2.j2', {'data': data})
