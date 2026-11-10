from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Faculty role add kiya gaya hai
    ROLE_CHOICES = (
        ('super_admin', 'Super Admin'),
        ('admin', 'Admin'),
        ('faculty', 'Faculty'), # <--- Naya Role
        ('student', 'Student'),
    )
    
    role = models.CharField(
        max_length=20, 
        choices=ROLE_CHOICES, 
        default='student',
        help_text='Designates the role of the user.'
    )

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"