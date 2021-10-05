from django.db import migrations
from api.user.models import CustomUser
from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user= CustomUser(name="shiam", 
        email="shiam@tees.dev",
        is_staff=True,
        is_superuser =True,
        phone="01679417369",
        gender="Male"
        )
        
        user.set_password("12345")
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data),
    ]


