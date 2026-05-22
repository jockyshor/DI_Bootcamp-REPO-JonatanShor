


#Here is a python code that generates a list of 20000 random numbers, called list_of_numbers, and a target number.

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728


#Copy this code, and create a program that finds, within list_of_numbers all the pairs of number that sum to the target number

pairs_of_numbers = []

for number in list_of_numbers:
    needed_number = target_number - number
    if (needed_number in list_of_numbers) and (number not in pairs_of_numbers) :
        pairs_of_numbers.append((number, needed_number))
    

for pair in pairs_of_numbers:
    print(f"{pair[0]} and {pair[1]} sums to the target_number {target_number}")


    