#    Instructions

# 3. Now create another Python file, called anagrams.py. This will contain all the UI (user interface)
#      functionality of your program, and will rely on AnagramChecker for the anagram-related logic.

# 4. It should do the following:

#   - Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.

#   - If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
#     Only a single word is allowed. If the user typed more than one word, show an error message.
#       (Hint: how do we know how many words were typed?)
#     Only alphabetic characters are allowed. No numbers or special characters.
#     Whitespace should be removed from the start and end of the user’s input.

#   - Once your code has decided that the user’s input is valid, it should find out the following:
#     All possible anagrams to the user’s word.
#     Create an AnagramChecker instance and apply it to the steps created above.
#     Display the information about the word in a user-friendly, nicely-formatted message such as:


#   YOUR WORD :”MEAT”
#   this is a valid English word.
#   Anagrams for your word: mate, tame, team.

from anagram_checker import AnagramChecker


def get_valid_word():
    while True:
        user_input = input("Enter a word or type 'q' to exit: ").strip()

        if user_input.lower() == "q":
            return None

        if len(user_input.split()) != 1:
            print("Error: only a single word is allowed")
            continue

        if not user_input.isalpha():
            print("Error: only alphabetic characters are allowed")
            continue

        return user_input


def display_anagrams(word, checker):
    if checker.is_valid_word(word):
        anagrams = checker.get_anagrams(word)
        anagram_list = ", ".join(anagrams) if anagrams else "No anagrams found."
        print(f'\nYOUR WORD: "{word.upper()}"')
        print("This is a valid English word.")
        print(f"Anagrams for your word: {anagram_list}")
    else:
        print(f'\nYOUR WORD: "{word.upper()}"')
        print("This is not a valid English word.")


def main():
    filename = "words.txt"
    checker = AnagramChecker(filename)

    while True:
        word = get_valid_word()
        if word is None:
            print("Exiting the program.")
            break
        display_anagrams(word, checker)


if __name__ == "__main__":
    main()
