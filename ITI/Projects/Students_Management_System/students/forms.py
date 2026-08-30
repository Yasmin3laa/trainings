from django import forms
from .models import Student

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['name', 'image', 'gpa', 'gender']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Enter full name'}),
            'image': forms.ClearableFileInput(attrs={'class': 'form-input'}),
            'gpa': forms.NumberInput(attrs={'class': 'form-input', 'step': '0.01', 'placeholder': 'e.g. 3.85'}),
            'gender': forms.Select(attrs={'class': 'form-input'}),
        }
