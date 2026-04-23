import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

used_letters = []
def ask_letter():
    while True: 
        letter = input("Choose a lettter: ").lower()
        if letter.isalpha() and len(letter) == 1:
            if letter in used_letters:
                print("It appears you have already used this letter, try another one")
            else:
                used_letters.append(letter)
                return letter
        else:
            print("Please write only letters")
    
hangman6 = [
 " 0 ",
  "-|-", 
 "| | ",
 "Game Over"
]
hangman5 = [
 " 0 ",
  "-|-", 
 "|  ",
]
hangman4 = [
 " 0 ",
  "-|-", 
]
hangman3 = [
 " 0 ",
  "-| ",
]
hangman2 = [
 " 0 ",
  "-  ",
]
hangman1 = [
 " 0 ",
]
hangman0 = []


def show_hangman(hangmannumber):
    print("++++++++++")
    for line in hangmannumber:
        print(line)
    print("++++++++++")

def word_status(word):
#####
    
def get_random_word():
    word = list(random.choice(wordslist))
    return word



def main():
    word = get_random_word()
    list_of_attemps = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6]
    current_attemp = list_of_attemps[0]
    while current_attemp is not hangman6:
        letter = ask_letter()
        if letter in word:
            print("nice...")
            
    
