from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    # Admin panel list mein role dikhayein
    list_display = ('username', 'email', 'role', 'first_name', 'last_name', 'is_staff')
    
    # Jab user edit karein toh role field dikhe
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('role',)}),
    )
    
    # Jab naya user banayein toh role field dikhe
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('role',)}),
    )

admin.site.register(CustomUser, CustomUserAdmin)