
#The point of the exercise is to check if a person can retire depending on their age and their gender.
#Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

#Create a function get_age(year, month, day)
#Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
#After calculating the age of a person, the function should return the age (the age is an integer).
#Create a function can_retire(gender, date_of_birth).
#It should call the get_age function (with what arguments?) in order to receive an age.
#Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
#Calculate. You may need to do a little more hard-coding here.
#Return True if the person can retire, and False if he/she can’t.



men_retirement_age = 67 
women_retirement_age = 62
current_year = 2026
current_month = 4
current_day = 2

def get_age(user_year, user_month, user_day):
   edad = (current_year - user_year)
   if (current_month, current_day) < (user_month, user_day):
      edad -= 1
   return edad 

def can_retire(gender, age):
    if gender == "m" and age >= men_retirement_age:
      print("You can retire")
    elif gender == "f" and age >= women_retirement_age:
      print("You can retire")
    elif gender == "m" and age < men_retirement_age:
       print("You Cant retire, YET")
    else:
       print("You cant retire, YET")
   

while True:
    u_year = (input("type the year you were born: "))
    try:
       año = int(u_year)

       if año <= current_year:
          break
       else:
          print("Try again, type a valid year")
    except ValueError:
       print("please enter the year in digits...")


while True:
    u_month = (input("type the month you were born, in numbers:  "))
    try:
       mes = int(u_month)

       if mes <= 12:
          break
       else:
          print("Try again, numbers between 1 and 12")
    except ValueError:
       print("please enter the month in digits...")


while True:
    u_day = (input("Type the day of the month in which you were born:  "))
    try:
       dia = int(u_day)

       if dia <= 31:
          break
       else:
          print("Try again, numbers between 1 and 31")
    except ValueError:
       print("please enter the day you were born in digits...")



while True:
    u_gender = input("if you are a men type M, if your a women type F:  ").lower()

    if u_gender == "m" or u_gender == "f":
       break
    else:
       print("Invalid Choice, please only type ´m´or ´f´")


   
can_retire(u_gender, get_age(año, mes, dia))




#Instructions
#Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
##Example:
#If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

#Hint: treating our number as a int or a str at different points in our code may be helpful
while True:
    func_number = input("Choose a one digit number:  ")
    
    try: 
       func_int = int(func_number)
       digit_count = len(func_number)
       if digit_count == 1:
          break
       else: 
          print("Please type only ONE digit")


    except ValueError:
       print("Please enter a digit...")  


def telephone(numero):
   print(f"3702 ({numero} + {numero*2} + {numero*3} + {numero*4})")

telephone(func_number) ##importante usar la variable que es str, para que no multiplique el valor del input y solo lo replique...






#Instructions
#Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.
#Create a function called throw_until_doubles.
#It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
#For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
#This function should return the number of times it threw the dice in total. In the example above, it should return 3.

#Create a main function.
#It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).

#After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
#Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.
#For example:

#If the results of the throws were as follows (your code would do 100 doubles, not just 3):
#(1, 2), (3, 1), (5, 5)
#(3, 3)
#(2, 4), (1, 2), (3, 4), (2, 2)

#Then my output would show something like this:
#Total throws: 8
#Average throws to reach doubles: 2.67.

import random

def throw_dice():
   return random.randint(1,6)



def throw_until_doubles():
   doubles_list = [] 
   while True:
        first_dice = throw_dice()
        second_dice = throw_dice()
        doubles_list.append((first_dice, second_dice))
        if first_dice == second_dice:
           break
   return doubles_list



tries_dict = {}

amount_of_doubles = 100

def main_func():
    try_number = 0
    remaining = amount_of_doubles 
    while remaining > 0:
        this_try = throw_until_doubles() 
        try_number += 1
        tries_dict[try_number] = this_try
        remaining -= 1
    
    return tries_dict


main_func()

total_throws = sum(len(v) for v in tries_dict.values())
print(f"The total amount of throws to reach {amount_of_doubles} doubles, was {total_throws}")

average_tries = round((total_throws / amount_of_doubles),2)
print(f"The average quantity of throws until doubles is {average_tries}")




      
   
