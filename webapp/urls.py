from django.conf.urls import url

from webapp.views import demo

urlpatterns = [
    url(r'^$', demo.index),
    url(r'^2$', demo.index2),
]
