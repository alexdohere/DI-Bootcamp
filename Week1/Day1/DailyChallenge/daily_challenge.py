# Instructions
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

string = input("Please enter a string with 10 characters: ")

if len(string) < 10:
    print("string not long enough")
elif len(string) > 10:
    print("string too long")
else:
    print("perfect string")

    # Then, print the first and last characters of the given text.

    first_char = string[0]
    last_char = string[-1]
    print("first character:", first_char)
    print("last character:", last_char)


# Using a for loop, construct the string character by character: Print the first character, then the second,
# then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld

string = input("Please enter a string: ")
growing_string = ""

for char in string:
    growing_string += char
    print(growing_string)


# Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method).
# For example:
# Hlrolelwod

import random

string = input("Please enter a string: ")

characters = list(string)

random.shuffle(characters)

jumbled_string = "".join(characters)

print("Jumbled string: ", jumbled_string)
