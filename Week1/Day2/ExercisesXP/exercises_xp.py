# Exercise 1 : Favorite Numbers
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.

my_fav_numbers = {2, 3, 8, 9, 15, 26, 35, 65}

print(my_fav_numbers)

# Add two new numbers to the set.

my_fav_numbers.add(22)
my_fav_numbers.add(55)

print(my_fav_numbers)

# Remove the last number.

my_fav_numbers_list = list(my_fav_numbers)

if my_fav_numbers_list:
    my_fav_numbers_list.pop()

my_fav_numbers = set(my_fav_numbers_list)

print(my_fav_numbers)

# Create a set called friend_fav_numbers with your friend’s favorites numbers.

friend_fav_numbers = {5, 6, 11, 19, 23, 44, 72}

# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)


# Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# No, as tuples are immutable


# Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(basket)

# Remove “Banana” from the list.

basket.remove("Banana")
print(basket)

# Remove “Blueberries” from the list.

basket.remove("Blueberries")
print(basket)

# Add “Kiwi” to the end of the list.

basket.append("Kiwi")
print(basket)

# Add “Apples” to the beginning of the list.

basket = ["Apples"] + basket
print(basket)

# Count how many apples are in the basket.

apples = basket.count("Apples")
print(apples)

# Empty the basket.

basket.clear()

# Print(basket)

print(basket)


# Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?

# A float is data type for numbers with decimals. Integer is for whole numbers.

# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

a_list = [1.5 + 0.5 * x for x in range(8)]
print(a_list)

# Can you think of another way to generate a sequence of floats?

a_list = []

for i in range(8):
    a_list.append(1.5 + 0.5 * i)

print(a_list)

a_list = []
index = 1.5

while index <= 5.0:
    a_list.append(index)
    index += 0.5

print(a_list)


# Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.

for number in range(1, 21):
    print(number)

# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for index in range(1, 21):
    if index % 2 == 0:
        print(index)


# Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

my_name = "Alex"

while True:
    user_input = input("Please enter your name: ")
    if user_input == "Alex":
        print("Hello, Alex!")
        break
    else:
        print("Try again.")


# Exercise 7: Favorite fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".

user_input = input("Please enter your favorite fruit(s), separated by a space: ")

# Store the favorite fruit(s) in a list (convert the string of words into a list of words).

favorite_fruits = user_input.split()

# # Now that we have a list of fruits, ask the user to input a name of any fruit.

fruit_name = input("Please enter the name of a fruit: ")

# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

if fruit_name in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy.")


# Exercise 8: Who ordered a pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.

toppings = []

while True:
    topping = input("Please enter a pizza topping (type 'quit' to finish): ")
    if topping == "quit":
        break
    else:
        toppings.append(topping)

        print(f"We'll add {topping} to your pizza.")

# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

for topping in toppings:
    print(topping)

base_price = 10
topping_price = 2.5
total_price = base_price + (topping_price * len(toppings))

print(f"Total price: ${total_price:.2f}")


# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Ask a family the age of each person who wants a ticket.
# Store the total cost of all the family’s tickets and print it out.

total_cost = 0

while True:
    age_input = input("Please enter the age of the person (type 'quit' to finish): ")

    if age_input == "quit":
        break

    age = int(age_input)

    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15

    total_cost += ticket_price

print(f"Total cost: ${total_cost:.2f}")

# A group of teenagers are coming to your movie theater and want to watch a movie
# that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they
# are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

teenagers = ["Alex", "Jack", "Julie", "Sarah"]

for name in teenagers[:]:
    age = int(input(f"Enter the age of {name}: "))
    if 16 <= age <= 21:
        teenagers.remove(name)

print("Allowed:", teenagers)


# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.

sandwich_orders = [
    "Tuna sandwich",
    "Pastrami sandwich",
    "Avocado sandwich",
    "Pastrami sandwich",
    "Egg sandwich",
    "Chicken sandwich",
    "Pastrami sandwich",
]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.

finished_sandwiches = []

# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)

    # After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
    # I made your tuna sandwich
    # I made your avocado sandwich
    # I made your egg sandwich
    # I made your chicken sandwich

    print(f"I made your {sandwich}")
