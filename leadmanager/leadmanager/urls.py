from django.contrib import admin
from django.urls import path, include

# Adding all the URL patterns we've defined in the different apps we created and
# bringing them here to make a cohesive URL schema
urlpatterns = [
    path("", include("frontend.urls")),
    path("", include("leads.urls")),
    path("", include("accounts.urls")),
]

