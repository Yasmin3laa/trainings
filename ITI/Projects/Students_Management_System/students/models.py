from django.db import models

# Create your models here.
class Student(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]
    
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='students/', blank=True, null=True)
    gpa = models.FloatField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)

    def __str__(self):
        return self.name
