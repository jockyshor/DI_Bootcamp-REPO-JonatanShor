#1. Ask the user for two inputs:

#A number (integer).
#A length (integer).
#2. Create a program that generates a list of multiples of the given number.
#3. The list should stop when it reaches the length specified by the user.

#Example 1:

#Input:

#number: 7
#length: 5
#Output:
#[7, 14, 21, 28, 35]


user_input = int(input("chose a number"))
user_length = int(input("choose the lenght"))
user_output = []
counter = 1
while len(user_output) < user_length:
     next_multiple = (user_input * counter)
     user_output.append(next_multiple)
     counter += 1
print(user_output)



#1. Ask the user for a string.
#2. Write a program that processes the string to remove consecutive duplicate letters.

#The new string should only contain unique consecutive letters.
#For example, “ppoeemm” should become “poem” (removes consecutive duplicates like ‘pp’, ‘ee’, and ‘mm’).
#3. The program should print the modified string.




user_str = input("write something:   ")
clean_response = []
for letters in user_str:
     if not clean_response or letters != clean_response[-1]:
          clean_response.append(letters)

final_response = "".join(clean_response)
print(final_response)

    







