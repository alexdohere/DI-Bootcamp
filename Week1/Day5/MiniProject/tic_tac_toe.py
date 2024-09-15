# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


# Hint
# To do this project, you basically need to create four functions:

# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.


def display_board(board):

    print("TIC TAC TOE")
    print("*************")

    for row in board:
        print("* " + " | ".join(row) + " *")
        print("*************")


def player_input(board, player):

    print()
    print(f"Player {player}'s turn...")
    print()

    while True:
        try:
            row = int(input("Enter row: ")) - 1
            col = int(input(f"Enter column: ")) - 1
            print()

            if board[row][col] == " ":
                board[row][col] = player
                break
            else:
                print("Spot already taken, try again.")
        except (ValueError, IndexError):
            print("Invalid input. Please enter a number between 1 and 3.")


def check_win(board, player):

    for i in range(3):
        if all([spot == player for spot in board[i]]):
            return True
        if all([board[j][i] == player for j in range(3)]):
            return True

    if all([board[i][i] == player for i in range(3)]):
        return True
    if all([board[i][2 - i] == player for i in range(3)]):
        return True

    return False


def play():

    print("Welcome to TIC TAC TOE!")
    print()

    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"
    for turn in range(9):
        display_board(board)
        player_input(board, current_player)

        if check_win(board, current_player):
            display_board(board)
            print()
            print(f"Player {current_player} wins!")
            print()
            return

        current_player = "O" if current_player == "X" else "X"

    display_board(board)
    print()
    print("It's a tie!")
    print()


if __name__ == "__main__":
    play()
