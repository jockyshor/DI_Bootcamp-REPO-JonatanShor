

#Create a set called my_fav_numbers and populate it with your favorite numbers.
#Add two new numbers to the set.
#Remove the last number you added to the set.
#Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
#Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
#Note: Sets are unordered collections, so ensure no duplicate numbers are added.


my_fav_numbers = {11, 23, 100, 50, 70}
other_fav_numbers = [33, 45]

my_fav_numbers.update(other_fav_numbers)
my_fav_numbers.remove(45)

friend_fav_numbers = {66, 69, 70, 88, 34}

our_favorite_numbers = my_fav_numbers.union(friend_fav_numbers)

#I can also use | this icon like this

our_favorite_numbers = my_fav_numbers | friend_fav_numbers


#Given a tuple of integers, try to add more integers to the tuple.
#Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.

new_tuple = (23,33,78)

#new_tuple.add(45) 
#new_tuple.__add__(45)

#these all will throw different kinds of errors, because you cant mutate tuples after they are created, if you want to correct something, you will have to re-write the variable meaning...

new_tuple = (23,33,78,45)


#Instructions:

#You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
#Remove "Banana" from the list.
#Remove "Blueberries" from the list.
#Add "Kiwi" to the end of the list.
#Add "Apples" to the beginning of the list.
#Count how many times "Apples" appear in the list.
#Empty the list.
#Print the final state of the list.


basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)


#Recap: What is a float? What’s the difference between a float and an integer?
#Create a list containing the following sequence of mixed types: floats and integers:
#1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
#Avoid hard-coding each number manually.
#Think: Can you generate this sequence using a loop or another method?


#The diference between a float and an integer, is that a float is a number which is not complete, meaning that it has a decimal. And an integer, while also a number, means its a number that is complete, and does not have decimals
lalista = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.]

new_list = [1.5]
while max(new_list) < 5.5:
    new_list.append(new_list[-1]+0.5)

print(new_list)



#Use an input to ask the user to enter their name.
#Using a while True loop, check if the user gave a proper name (not digits and at least 3 letters long)
#hint: check for the method isdigit()
#if the input is incorrect, keep asking for the correct input until it is correct
#if the input is correct print “thank you” and break the loop



while True:
    user_name = input("Whats Your Name:  ")
    if not user_name.isalpha():
        print("Try Again, No numbers or special characters this time...")
    else:
        print(f"Thank You, {user_name.title()}")
        break



#Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
#Store these fruits in a list.
#Ask the user to input the name of any fruit.
#If the fruit is in their list of favorite fruits, print:
#"You chose one of your favorite fruits! Enjoy!"
#If not, print:
#"You chose a new fruit. I hope you enjoy it!"


user_input = str(input("Whats Your Favorite Fruit? (you can input several fruits, separated by spaces):  ")).lower()
user_favorite_fruit_list = user_input.split()
user_fruit_input = str(input("Name any Fruit that comes to mind:   ")).lower()
if user_fruit_input in user_favorite_fruit_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")


#Write a loop that asks the user to enter pizza toppings one by one.
#Stop the loop when the user types 'quit'.
#For each topping entered, print:
#"Adding [topping] to your pizza."
#After exiting the loop, print all the toppings and the total cost of the pizza.
#The base price is $10, and each topping adds $2.50.

user_pizza = []
   

while True: 

    user_toppings = str(input("Choose Your Toppings, each topping is $2.50:")).split()
    user_pizza.extend(user_toppings)
    
    
    if "quit" in user_toppings:
        user_pizza.remove("quit")
        pizza_cost = 10 + (len(user_pizza)*2.5)
        print(f"Your toppings are: {user_pizza}, granting a total of: {pizza_cost}")
        break





