#You are given two lists. Convert them into a dictionary where the first list contains the keys and the second list contains the corresponding values.
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







