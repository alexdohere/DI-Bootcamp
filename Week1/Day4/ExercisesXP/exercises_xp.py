# Exercise 1 : What are you learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you
# are learning in this course.

# Call the function, and make sure the message displays correctly.


def display_message():
    print("I am learning web development in this course.")


display_message()


# Exercise 2: What’s your favorite book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.


def favorite_book(title):
    print(f"One of my favorite books is {title}.")


favorite_book("Alice in Wonderland")


# Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.


def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}.")


describe_city("Reykjavik")


# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly
# between 1 and 100. Use the random module.

# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail
# message and display both numbers.

import random


def compare_numbers(user_number):
    if user_number < 1 or user_number > 100:
        print("Please enter a number between 1 and 100.")
        return

    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("Success!")
    else:
        print(f"Fail. User number: {user_number}, Random number: {random_number}")


user_number = int(input("Enter a number between 1 and 100: "))
compare_numbers(user_number)


# Exercise 5 : Let’s create some personalized shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it,
# such as "The size of the shirt is <size> and the text is <text>"

# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.


def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")


make_shirt()

make_shirt(size="medium")

make_shirt(size="medium", text="I love pizza")

make_shirt(text="I love doughnuts", size="small")


# Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great"
# to each magician’s name.

# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]


def show_magicians():
    for magician in magician_names:
        print(magician)


def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] += " the Great"


make_great(magician_names)
show_magicians()


# Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

import random


def get_random_temp():
    return random.randint(-10, 40)


print(get_random_temp())

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”


def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")


main()


# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40


def main():
    temp = get_random_temp()

    if temp < 0:
        advice = "Brrr, that’s freezing! Wear some extra layers today."
    elif 0 <= temp <= 16:
        advice = "Quite chilly! Don’t forget your coat."
    elif 16 < temp <= 23:
        advice = "Mild weather. A light jacket should be fine."
    elif 24 <= temp <= 32:
        advice = "Nice and warm. Enjoy the weather!"
    else:
        advice = "It’s hot outside! Stay hydrated and keep cool."

    print(f"The temperature right now is {temp} degrees Celsius.")
    print(advice)


main()

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper
# limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.


def get_random_temp(season):
    if season == "winter":
        lower, upper = -10, 16
    elif season == "spring":
        lower, upper = 0, 24
    elif season == "summer":
        lower, upper = 24, 40
    elif season == "autumn":
        lower, upper = 0, 24
    else:
        return "Invalid season."

    return random.randint(lower, upper)


# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly.
# Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().


def main():
    season = (
        input("Please enter the season (winter, spring, summer, autumn): ")
        .strip()
        .lower()
    )

    temp = get_random_temp(season)

    if temp < 0:
        advice = "Brrr, that’s freezing! Wear some extra layers today."
    elif 0 <= temp <= 16:
        advice = "Quite chilly! Don’t forget your coat."
    elif 16 < temp <= 23:
        advice = "A bit cool, but manageable. A light jacket should be fine."
    elif 24 <= temp <= 32:
        advice = "Nice and warm. Enjoy the weather!"
    else:
        advice = "It’s quite hot! Stay hydrated and keep cool."

    print(f"The temperature right now is {temp} degrees Celsius.")
    print(advice)


main()

# Bonus: Give the temperature as a floating-point number instead of an integer.


def get_random_temp(season):
    if season == "winter":
        lower, upper = -10.0, 16.0
    elif season == "spring":
        lower, upper = 0.0, 24.0
    elif season == "summer":
        lower, upper = 24.0, 40.0
    elif season == "autumn":
        lower, upper = 0.0, 24.0
    else:
        return "Invalid season."

    return round(random.uniform(lower, upper), 1)


def main():
    season = (
        input("Enter the season (winter, spring, summer, autumn): ").strip().lower()
    )

    temp = get_random_temp(season)

    if temp < 0:
        advice = "Brrr, that’s freezing! Wear some extra layers today."
    elif 0 <= temp <= 16:
        advice = "Quite chilly! Don’t forget your coat."
    elif 16 < temp <= 23:
        advice = "A bit cool, but manageable. A light jacket should be fine."
    elif 24 <= temp <= 32:
        advice = "Nice and warm. Enjoy the weather!"
    else:
        advice = "It’s quite hot! Stay hydrated and keep cool."

    print(f"The temperature right now is {temp} degrees Celsius.")
    print(advice)


main()

# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December).
# Determine the season according to the month.


def get_season_from_month(month):
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
    else:
        return "Invalid month"


def main():
    try:
        month = int(input("Please enter the month number: "))
        if 1 <= month <= 12:
            season = get_season_from_month(month)
        else:
            print("Invalid month number.")
            return
    except ValueError:
        print("Please enter a valid number.")
        return

    temp = get_random_temp(season)

    if temp < 0:
        advice = "Brrr, that’s freezing! Wear some extra layers today."
    elif 0 <= temp <= 16:
        advice = "Quite chilly! Don’t forget your coat."
    elif 16 < temp <= 23:
        advice = "A bit cool, but manageable. A light jacket should be fine."
    elif 24 <= temp <= 32:
        advice = "Nice and warm. Enjoy the weather!"
    else:
        advice = "It’s quite hot! Stay hydrated and keep cool."

    print(f"The temperature right now is {temp} degrees Celsius.")
    print(advice)


main()


# Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on
# how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"},
]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers.
# Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.

# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.


def ask_questions(data):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for item in data:
        question = item["question"]
        correct_answer = item["answer"]
        user_answer = input(question + " ").strip()

        if user_answer == correct_answer:
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append(
                {
                    "question": question,
                    "user_answer": user_answer,
                    "correct_answer": correct_answer,
                }
            )

    return correct_answers, incorrect_answers, wrong_answers


def display_results(correct, incorrect, wrong_answers):
    print(f"Correct Answers: {correct}")
    print(f"Incorrect Answers: {incorrect}")

    if wrong_answers:
        print("Wrong Answers Details:")
        for wrong in wrong_answers:
            print(f"Question: {wrong['question']}")
            print(f"Your Answer: {wrong['user_answer']}")
            print(f"Correct Answer: {wrong['correct_answer']}\n")


def main():
    while True:
        correct, incorrect, wrong_answers = ask_questions(data)
        display_results(correct, incorrect, wrong_answers)

        if incorrect > 3:
            print("You had more than 3 wrong answers.")
            play_again = input("Do you want to play again?: ").strip().lower()
            if play_again != "yes":
                print("Thanks for playing!")
                break
        else:
            print("Thanks for playing!")
            break


main()
