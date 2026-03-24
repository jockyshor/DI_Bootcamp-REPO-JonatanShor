

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
