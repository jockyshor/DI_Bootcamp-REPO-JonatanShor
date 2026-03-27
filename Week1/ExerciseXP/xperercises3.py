#You are given two lists. Convert them into a dictionary where the first list contains the keys and the second list contains the corresponding values.
from turtle import update


keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

new_dict = {}
zipped_items = zip(keys, values)
for key, value in zipped_items:
    new_dict[key]=value

print(new_dict)

#Write a program that calculates the total cost of movie tickets for a family based on their ages.

#Family members’ ages are stored in a dictionary.
#The ticket pricing rules are as follows:
#Under 3 years old: Free
#3 to 12 years old: $10
#Over 12 years old: $15


family_dict = {}
bill = 0

while True:
    
    print("To finish, type ´Finish´")
    user_name = str(input("Whats Your Name?  ")).lower().strip()
    if user_name == "finish":
        break 
    
    user_age = input(f"Type {user_name.title()} Age")
    try:
        user_age = int(user_age)
        if user_age < 3:
            price = 0
        elif  3 <= user_age <= 12:
            price = 10
        else:
            price = 15
        bill += price
        zipped_family_data = zip(user_name, user_age)
        family_dict[user_name] = user_age

    except ValueError:
        print("Try Again, Type a Number... ")
        continue
    
    
    
print(f"Your Total Will Be: ${bill}, How woud you like to pay?")
print(family_dict)


#Create a dictionary called brand with the provided data.
#Modify and access the dictionary as follows:
#Change the value of number_stores to 2.
#Print a sentence describing Zara’s clients using the type_of_clothes key.
#Add a new key country_creation with the value Spain.
#Check if international_competitors exists and, if so, add “Desigual” to the list.
#Delete the creation_date key.
#Print the last item in international_competitors.
#Print the major colors in the US.
#Print the number of keys in the dictionary.
#Print all keys of the dictionary.



#name: Zara
#creation_date: 1975
#creator_name: Amancio Ortega Gaona
#type_of_clothes: men, women, children, home
#international_competitors: Gap, H&M, Benetton
#number_stores: 7000
#major_color: 
#France: blue, 
#Spain: red, 
#US: pink, green


zara_dict = {"name": "Zara", "creation_date": 1975, "creator_name": "Amancio Ortega Gaona", "type_of_clothes": ["men", "women", "children", "home"], "international_competitors": ["Gap", "H&M", "Benneton"], "number_stores": 7000, "major_colors": {"France": "blue", "Spain": "Red", "US": ["pink", "green"]}}

zara_dict["number_stores"]= 2


print(f"we are proud to say that in {zara_dict["name"].title()} we offer clothes for {zara_dict["type_of_clothes"]}")

zara_dict["country_creation"] = "Spain"

print(zara_dict)

if "international_competitors" in zara_dict:
    zara_dict["international_competitors"].append("Desigual")

del zara_dict["creation_date"]

print(zara_dict["international_competitors"][-1])

print(zara_dict["major_colors"]["US"])

print(len(zara_dict))

for keys in zara_dict:
    print(keys)


more_on_zara = {"creation_date": 1975, "number_stores": 7000}
zara_dict.update(more_on_zara)


#You are given a list of Disney characters. Create three dictionaries based on different patterns as shown below:

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
characters_to_index = {}


for index, names in enumerate(users):
    characters_to_index[names] = index
    
print(characters_to_index)


index_to_characters = {}
index = list(range(0,6))
for i in index:
    index_to_characters[i] = names

print(index_to_characters)


alphabet_users = sorted(users)
print(alphabet_users)
alphabet_dict = {}

for index, names in enumerate(alphabet_users):
    alphabet_dict[index] = names

print(alphabet_dict)


