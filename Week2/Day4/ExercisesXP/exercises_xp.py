# Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator.
# We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# 1. Download this word list

# 2. Save it in your development directory.

# 3. Create a function called get_words_from_file. This function should read the file’s content and return the
#    words as a collection. What is the correct data type to store the words?

import random


def get_words_from_file(filename):
    with open(filename, "r") as file:
        words = file.read().split()
    return words


# 4. Create another function called get_random_sentence which takes a single parameter called length.
#    The length parameter will be used to determine how many words the sentence should have. The function should:
#   - use the words list to get your random words.
#   - the amount of words should be the value of the length parameter.
# 5. Take the random words and create a sentence (using a python method), the sentence should be lower case.


def get_random_sentence(length):
    words = get_words_from_file("words.txt")
    sentence = " ".join(random.choice(words) for _ in range(length))
    return sentence.lower()


# 6. Create a function called main which will:
#   - Print a message explaining what the program does.
#   - Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
#     -If the user inputs incorrect data, print an error message and end the program.
#     -If the user inputs correct data, run your code.


def main():
    print("This program is a random sentence generator")
    try:
        length = int(input("Please enter sentence length (2 to 20 words): "))
        if length < 2 or length > 20:
            raise ValueError("Length must be between 2 and 20.")
    except ValueError as e:
        print(f"Invalid input: {e}")
        return

    sentence = get_random_sentence(length)
    print(f"Generated sentence: {sentence}")


main()


# Exercise 2: Working with JSON
# Instructions

import json

sampleJson = """{
   "company":{
      "employee":{
         "name":"emma",
         "payable":{
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# 1. Access the nested “salary” key from the JSON-string above.

data = json.loads(sampleJson)
salary = data["company"]["employee"]["payable"]["salary"]
print(f"Salary: {salary}")

# 2. Add a key called “birth_date” to the JSON-string at the same level as the “name” key.

data["company"]["employee"]["birth_date"] = "1990-01-01"

# 3. Save the dictionary as JSON to a file.

json_string = json.dumps(data, indent=4)

with open("modified_data.json", "w") as file:
    file.write(json_string)

print("JSON saved to 'modified_data.json'")
