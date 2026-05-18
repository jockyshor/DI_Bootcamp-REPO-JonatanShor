

#Challenge 1: Sorting


#Instructions:

#Write a Python program that takes a single string of words as input, where the words are separated by commas (e.g., ‘apple,banana,cherry’). The program should output these words sorted in alphabetical order, with the sorted words also separated by commas.





#Step 1: Get Input

#Use the input() function to get a string of words from the user.
#The words will be separated by commas.
user_input = input("write a string where the words are separated by commas (e.g., ‘apple,banana,cherry’)")


#Step 2: Split the String

split_input = user_input.split(",")

#Step 3: Sort the List

sorted_input = split_input.sort()

#Step 4: Join the Sorted List

result = ",".join(sorted_input)

#Step 5: Print the Result

print(result)

#Print the resulting comma-separated string.
#Expected Output:

#If the input is without,hello,bag,world, the output should be bag,hello,without,world.









#Challenge 2: Longest Word


#Instructions:

#Write a function that takes a sentence as input and returns the longest word in the sentence. If there are multiple longest words, return the first one encountered. Characters like apostrophes, commas, and periods should be considered part of the word.



#Step 1: Define the Function
#Define a function that takes a string (the sentence) as a parameter.
#Step 2: Split the Sentence into Words
#Step 3: Initialize Variables
#Step 4: Iterate Through the Words
#Step 5: Compare Word Lengths
#Step 6: Return the Longest Word


def longest_word(str):
    words_arr = str.split(" ")
    
    longest = ""

    for word in words_arr:
        if len(word) > len(longest):
            longest = word

    return longest


p
    

    


