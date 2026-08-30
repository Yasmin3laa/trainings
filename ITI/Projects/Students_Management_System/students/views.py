from django.shortcuts import render, redirect, get_object_or_404
from .models import Student
from .forms import StudentForm

# Create your views here.
def students(request):
    students = Student.objects.all()
    return render(request, 'students.html', {'students': students})

def create_student(request):
    students = Student.objects.all()

    if request.method == 'POST':
        form = StudentForm(request.POST, request.FILES)

        if form.is_valid():
            form.save()
            return redirect('create_student')

    else:
        form = StudentForm()

    return render(
        request,
        'student_form.html',
        {
            'form': form,
            'students': students,
            'is_update': False
        }
    )

def update_student(request, pk):
    student = get_object_or_404(Student, pk=pk)
    students = Student.objects.all()

    if request.method == 'POST':
        form = StudentForm(request.POST, request.FILES, instance=student)

        if form.is_valid():
            form.save()
            return redirect('create_student')

    else:
        form = StudentForm(instance=student)

    return render(
        request,
        'student_form.html',
        {
            'form': form,
            'students': students,
            'is_update': True
        }
    )
