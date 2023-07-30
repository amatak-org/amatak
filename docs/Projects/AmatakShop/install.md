#### Step 1
- Install Amatak-shop from Py Library.
````
pip install amatak-shop
````

#### Step 2
- Add Amatak Shop app to your django settings project.
````
INSTALLED_APPS = [

    'amatak_shop',
]
````

#### Step 3
- add amatak_shop urls to your django urls project .
- noted: please add (inlcude) 
````
from django.urls import path, include #new add

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('', include('amatak_shop.urls.home', namespace='home')),
]
````

#### Step 4
- You might face some other module for example.
- package abc module not found
- in this case install all require modules and run
````
python manage.py makemigrations
````

#### Step 5
- Migrate Database.
````
python manage.py makemigrations
python manage.py migrate
````

#### Step 6
- Create Superadmin.
````
python manage.py createsuperuser --username admin
pass: YourPassWord
````

#### Step 7
- Start Server.
````
python manage.py runserver
````

#### Done!
- You have created an online store within 7mins.