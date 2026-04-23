
current_board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]
def display_board(rows):
    print("******************")
    for i, row in enumerate(rows):
        
        print(f"* {row[0]}  |  {row[1]}  |  {row[2]}  *")
        
        # Print the divider after the first and second rows
        if i  < 2:
            print("* ---| --- | --- *")
            
    print("******************")




def ask_row():
    acceptable_value = False
    while acceptable_value == False:
        try:
            row_choice = int(input("Enter row(1, 2 or 3): "))
            if 1 <= row_choice <= 3:
                acceptable_value = True
            else: 
                print("Choose a number between 1 and 3...")
        except ValueError:
            print("Please type only digits")
    return row_choice

def ask_col():
    acceptable_value = False
    while acceptable_value == False:
        try:
            col_choice = int(input("Enter column(1, 2 or 3) "))
            if 1 <= col_choice <= 3:
                acceptable_value = True
            else: 
                print("Choose a number between 1 and 3...")
        except ValueError:
            print("Please type only digits")
    return col_choice



def player_input():
    while True:
        row_input = ask_row()-1
        col_input = ask_col()-1
        if current_board[row_input][col_input] != " ":
            print("Chosee a different move, it appears the box you have chosen its already taken...")
        else: break
    return row_input, col_input
    
def check_if_there_is_winner():
    check = False
    for row in current_board:
        if row[0] == row[1] == row[2] and row[1] != " ":
            check = True
    for col in range(3):
        if current_board[0][col] == current_board[1][col] == current_board[2][col] and current_board[0][col] != " ":
            check = True
    if (current_board[0][0] == current_board[1][1] == current_board[2][2] 
        and current_board[0][0] != " "):
        check = True
    
    if (current_board[0][2] == current_board[1][1] == current_board[2][0] 
        and current_board[0][2] != " "):
        check = True
    return check
    

def inject_move_to_board(row, col, player_symbol):
    current_board[row][col] = player_symbol
    
        


def play():
    print("Welcome to the TIC TAC TOE game")
    display_board(current_board)
    there_is_a_winner = False
    current_player = "X"
    while there_is_a_winner == False:
        print(f"Its {current_player}´s turn")
        row, col = player_input()
        inject_move_to_board(row, col, current_player)
        display_board(current_board)
        there_is_a_winner = check_if_there_is_winner()
        if all(cell != " " for row in current_board for cell in row):
            display_board(current_board)
            print("It's a draw!")
            break
        if current_player == "X":
            current_player = "O"
        elif current_player == "O":
            current_player = "X"
    print("Game Over")
        
        
 





play()