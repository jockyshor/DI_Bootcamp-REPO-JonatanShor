
import random

#Step 1: Define a Function

#Define a function named display_message().
#This function should not take any parameters.


#Step 2: Print a Message

#For example: “I am learning about functions in Python.”


#Step 3: Call the Function

#This will execute the code inside the function and print your message.


def display_message():
    print("I am learning about functions in Python")

display_message()


#Step 1: Define a Function with a Parameter

#Define a function named favorite_book().
#This function should accept one parameter called title.


#Step 2: Print a Message with the Title

#The function needs to output a message like “One of my favorite books is <title>”.



#Step 3: Call the Function with an Argument

#Call the favorite_book() function and provide a book title as an argument.
#For example: favorite_book("Alice in Wonderland").


def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("Alice in Wonderland")



#Step 1: Define a Function with Parameters ok

#Define a function named describe_city().
#This function should accept two parameters: city and country.
#Give the country parameter a default value, such as “Unknown”.


#Step 2: Print a Message

#Inside the function, set up the code to display a sentence like “ is in “.
#Replace <city> and <country> with the parameter values.


#Step 3: Call the Function

#Call the describe_city() function with different city and country combinations.
#Try calling it with and without providing the country argument to see the default value in action.
#Example: describe_city("Reykjavik", "Iceland") and describe_city("Paris").


def describe_city(city, country=None):
    if not country:
        country = "unkown"
    print(f"{city.title()} is in {country.title()}")

describe_city("lima", "peru")
describe_city("paris")



def describe_city(city, country="unknown"): ###otra opcion para hacerlo y poner el default de una en el function
    print(f"{city.title()} is in {country.title()}")


#Step 1: Import the random Module

#At the beginning of your script, use import random to access the random number generation functions.


#Step 2: Define a Function with a Parameter

#Create a function that accepts a number between 1 and 100 as a parameter.


#Step 3: Generate a Random Number

#Inside the function, use random.randint(1, 100) to generate a random integer between 1 and 100.


#Step 4: Compare the Numbers

#If they are the same, print a success message. Otherwise, print a fail message and display both numbers.


#Step 5: Call the Function

#Call the function with a number between 1 and 100.



