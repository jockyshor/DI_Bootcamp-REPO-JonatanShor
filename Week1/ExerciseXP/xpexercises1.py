#Print the following output using one line of code:

print("Hello, World!\n"*5)

#Write code that calculates the result of:
#(99^3)*8 (meaning 99 to the power of 3, times 8).

result = (99**3)*8
print(f"The result is:  {result}")

#Predict the output of the following code snippets:
#Comment what is your guess, then run the code and compare

5 < 3 #False
3 == 3 #True
3 == "3" #False
"3" > 3 #False
"Hello" == "hello" #False

#Create a variable called computer_brand which value is the brand name of your computer.
#Using the computer_brand variable, print a sentence that states the following:
#"I have a <computer_brand> computer."

computer_brand = "samsung"

print(f"I have a {computer_brand} computer")

#Create a variable called name, and set it’s value to your name.
#Create a variable called age, and set it’s value to your age.
#Create a variable called shoe_size, and set it’s value to your shoe size.
#Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2, and 3.
#Have your code print the info message.
#Run your code.


name = "Jonatan"
age = 23
shoe_size = 10
info = f"My name is {name}, im from Peru, but now im livin in Israel. Im {age}, and currently studing full stack coding. I will come back to you, i need to buy shoes, because im size {shoe_size}, i need to hurry before they run out of my size"
print(info)


#Create two variables, a and b.
#Each variable’s value should be a number.
#If a is bigger than b, have your code print "Hello World".
a = 23
b = 18
if a > b:
    print("Hello World")
    

#Write code that asks the user for a number and determines whether this number is odd or even.

numero = int(input("Choose a number:  "))
if numero % 2 == 0:
    print("The number you choose, is even")
else:
    print("The number you choose is odd")
    

#Write code that asks the user for their name and determines whether or not you have the same name. Print out a funny message based on the outcome.

user_name = input("Type your name, and Lets Check if we have the same name:  ").lower()
my_name = "jonatan"
if user_name == my_name:
    print("I guess you know about it then ...")
else:
    print(f"Cool name... \n but ont as cool as {my_name.capitalize()} ")

#Write code that will ask the user for their height in centimeters.
#If they are over 145 cm, print a message that states they are tall enough to ride.
#If they are not tall enough, print a message that says they need to grow some more to ride.

print("Welcome to the ride, lets check if your tall enough...")
user_height = int(input("Insert you height, in cm:  "))
if user_height >= 145:
    print("You are tall enough to ride big guy \n Welcome")
else:
    print("I´m Sorry, your are not tall enough to ride, come back when your taller...")

