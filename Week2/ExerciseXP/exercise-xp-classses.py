
#Instructions:
#Use the provided Cat class to create three cat objects. Then, create a function to find the oldest cat and print its details.

#Step 1: Create Cat Objects

#Use the Cat class to create three cat objects with different names and ages.


#Step 2: Create a Function to Find the Oldest Cat

#Create a function that takes the three cat objects as input.
#Inside the function, compare the ages of the cats to find the oldest one.
#Return the oldest cat object.


#Step 3: Print the Oldest Cat’s Details
#Call the function to get the oldest cat.
#Print a formatted string: “The oldest cat is <cat_name>, and is <cat_age> years old.”

#Replace <cat_name> and <cat_age> with the oldest cat’s name and age.

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
first_cat = Cat("michi", 4)

# cat1 = create the object
second_cat = Cat("michifus", 5)

third_cat = Cat("gatillo", 3)
# Step 2: Create a function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    list_of_cats = [cat1, cat2, cat3]
    return max(list_of_cats, key=lambda x: x.age)


oldest_cat = find_oldest_cat(first_cat,second_cat,third_cat)


# Step 3: Print the oldest cat's details

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")






#Instructions:
#Create a Dog class with methods for barking and jumping. Instantiate dog objects, call their methods, and compare their sizes.

#Step 1: Create the Dog Class
#Create a class called Dog.
#In the __init__ method, take name and height as parameters and create corresponding attributes.
#Create a bark() method that prints “<dog_name> goes woof!”.

#Create a jump() method that prints “<dog_name> jumps <x> cm high!”, where x is height * 2.


#Step 2: Create Dog Objects

#Create davids_dog and sarahs_dog objects with their respective names and heights.


#Step 3: Print Dog Details and Call Methods
#Print the name and height of each dog.

#Call the bark() and jump() methods for each dog.

class Dog():
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        print(f"{self.name} goes woof")

    def jump(self):
        jump_height = (self.height *2)
        print(f"{self.name} can jump {jump_height}cm")



davids_dog = Dog("Firu", 80)
sarahs_dog = Dog("Ola", 65)

print(davids_dog.name, davids_dog.height)
print(sarahs_dog.name, sarahs_dog.height)

davids_dog.bark()
davids_dog.jump()
sarahs_dog.bark()
sarahs_dog.jump()


#Instructions:
#Create a Song class with a method to print song lyrics line by line.

#Step 1: Create the Song Class
#Create a class called Song.
#In the __init__ method, take lyrics (a list) as a parameter and create a corresponding attribute.

#Create a sing_me_a_song() method that prints each element of the lyrics list on a new line.

class Song():
    def __init__(self, song_name, lyrics_list):
        self.name = song_name
        self.lyrics = lyrics_list

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song("stairway to heaven", ["There's a lady who's sure", "all that glitters is gold", "and she's buying a stairway to heaven"])
stairway.sing_me_a_song()

#Instructions
#Step 1: Define the Zoo Class
#1. Create a class called Zoo.
#2. Implement the __init__() method:
#It takes a string parameter zoo_name, representing the name of the zoo.

#Initialize an empty list called animals to keep track of animal names.
#3. Add a method add_animal(new_animal):

#This method adds a new animal to the animals list.
#Do not add the animal if it is already in the list.
#4. Add a method get_animals():

#This method prints all animals currently in the zoo.
#5. Add a method sell_animal(animal_sold):

#This method checks if a specified animal exists on the animals list and if so, remove from it.
#6. Add a method sort_animals():

#This method sorts the animals alphabetically.
#It also groups them by the first letter of their name.
#The result should be a dictionary where:
#Each key is a letter.
#Each value is a list of animals that start with that letter.
#7. Add a method get_groups():

#This method prints the grouped animals as created by sort_animals().

class Zoo():
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, *args):
        if args in self.animals:
            pass
        else:
            self.animals.append(args)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else: 
            pass

    def sort_animals(self):
        animals_dict = {}
        for animals in self.animals:
            first_letter = animals[0].lower

            if first_letter not in animals_dict:
                animals_dict[first_letter] = animals
            else:
                animals_dict[first_letter].append(animals)
        sorted_animals_dict = {key: animals_dict[key] for key in sorted(animals_dict)}
        return sorted_animals_dict


    def get_groups(self,):
        for key, values in 

