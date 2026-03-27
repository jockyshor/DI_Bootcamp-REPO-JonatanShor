#1. User Input:

#Ask the user to enter a word.
#Store the input word in a variable.
#2. Creating the Dictionary:

#Iterate through each character of the input word using a loop.
#And check if the character is already a key in the dictionary.

#1 

user_input = input("Type a word:  ")

#2

letter_key = {}


for  index, letter, in enumerate(user_input):
    if letter not in letter_key:
        letter_key[letter]=[index]
    else:
        letter_key[letter].append(index)
        
        

print(letter_key)


#1. Store Data:

#You will be provided with a dictionary (items_purchase) where the keys are the item names and the values are their prices (as strings with a dollar sign). The priority is defined by the position of the iten on the dictionary: from the most important to the less important.
#You will also be given a string (wallet) representing the amount of money you have.
#2. Data Cleaning:

#You need to clean the dollar sign and the commas using python. Don’t hard code it.
#3. Determining Affordable Items:

#create a list called basket and add there the items that you can buy with the money you have on the wallet
#Don’t forget to update the wallet after buying an item.
#If the basket is empty (no items can be afforded), return the string “Nothing”.
#Otherwise, print the basket list in alphabetical order.


items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

clean_items_dict = {}
for item, price in items_purchase.items():
    clean_price = price.replace("$", "").replace(",","")
    clean_items_dict[item]=int(clean_price)

clean_wallet = int(wallet.replace("$",""))

print(clean_items_dict)
print(clean_wallet)

basket = []

for item, price in clean_items_dict.items():
    if price <= clean_wallet:
        basket.append(item)
        clean_wallet -= price
if not basket:
    print("Nothing")

else:
    print(sorted(basket))
    print("You have ${} left in your wallet".format(clean_wallet))   


