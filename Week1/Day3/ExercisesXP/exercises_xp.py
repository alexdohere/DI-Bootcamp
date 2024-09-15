# Exercise 1 : Convert lists into dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

keys = ["Ten", "Twenty", "Thirty"]
values = [10, 20, 30]

a_dict = dict(zip(keys, values))
print(a_dict)


# Exercise 2 : Cinemax #2
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable
# (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    total_cost += price

    print(f"{name.title()}: ${price}")

print(f"Total cost: ${total_cost}")


family = {}

while True:
    name = input("Enter the name of the family member (or press Enter to finish): ")

    if not name:
        break

    age = int(input(f"Enter the age of {name}: "))
    family[name] = age

total_cost = 0

for name, age in family.items():

    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    total_cost += price

    print(f"{name.title()}: ${price}")

print(f"Total cost: ${total_cost}")


# Exercise 3: Zara
# Instructions
# Here is some information about a brand.
# name: Zara
# creation_date: 1975
# creator_name: Amancio Ortega Gaona
# type_of_clothes: men, women, children, home
# international_competitors: Gap, H&M, Benetton
# number_stores: 7000
# major_color:
#     France: blue,
#     Spain: red,
#     US: pink, green


# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {"France": "blue", "Spain": "red", "US": ["pink", "green"]},
}

# 3. Change the number of stores to 2.

brand["number_stores"] = 2

# 4. Print a sentence that explains who Zaras clients are.

print(f"Zara offers clothing for {', '.join(brand['type_of_clothes'])}.")

# 5. Add a key called country_creation with a value of Spain.

brand["country_creation"] = "Spain"

# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 7. Delete the information about the date of creation.

del brand["creation_date"]

# 8. Print the last international competitor.

print(f"The last international competitor is {brand['international_competitors'][-1]}.")

# 9. Print the major clothes colors in the US.

print(f"Major clothes colors in the US are: {', '.join(brand['major_color']['US'])}.")

# 10. Print the amount of key value pairs (ie. length of the dictionary).

print(f"The amount of key-value pairs is: {len(brand)}.")

# 11. Print the keys of the dictionary.

print(f"The keys in the dictionary are: {list(brand.keys())}.")

# 12. Create another dictionary called more_on_zara with the following details:

# creation_date: 1975
# number_stores: 10 000

more_on_zara = {"creation_date": 1975, "number_stores": 10000}

# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.

brand.update(more_on_zara)

# 14. Print the value of the key number_stores. What just happened ?

print(f"The number of stores is: {brand['number_stores']}.")


# Exercise 4 : Disney characters
# Instructions
# Use this list :

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.

disney_users_A = {user: index for index, user in enumerate(users)}

print(disney_users_A)

# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.

disney_users_B = {index: user for index, user in enumerate(users)}

print(disney_users_B)

# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.

disney_users_C = {user: index for index, user in enumerate(sorted(users))}

print(disney_users_C)

# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.

disney_users_i = {user: index for index, user in enumerate(users) if "i" in user}

print(disney_users_i)

# The characters, which names start with the letter “m” or “p”.

disney_users_mp = {
    user: index for index, user in enumerate(users) if user.startswith(("M", "P"))
}

print(disney_users_mp)
