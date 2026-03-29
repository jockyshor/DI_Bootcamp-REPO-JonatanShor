#You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

#Requirements:
#Calculate the average grade for each student and store the results in a new dictionary called student_averages.
#Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
#A: 90 and above
#B: 80 to 89
#C: 70 to 79
#D: 60 to 69
#F: Below 60
#Calculate the class average (the average of all students’ averages) and print it.
#Print the name of each student, their average grade, and their letter grade.

student_averages = {}
for student, grades in student_grades.items():
    student_averages[student]=(sum(grades)/len(grades))

print(student_averages)


student_letter_grades = {}
for student, avgrade in student_averages.items():
    if avgrade >= 90:
        grade = "A"
    elif avgrade >= 80:
        grade = "B"
    elif avgrade >= 70:
        grade = "C"
    elif avgrade >= 60:
        grade = "D"
    else:
        grade = "F"
    student_letter_grades[student] = grade

print(student_letter_grades)

total_average = 0

for student, avgrade in student_averages.items():
    total_average += avgrade
class_average = total_average / len(student_averages)
print(f" The Class Average is: {class_average}")    


for student, 