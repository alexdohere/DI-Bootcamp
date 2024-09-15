# # Exercise 1: Currencies
# # Instructions


# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount


# #     #Your code starts HERE


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    # # Using the code above, implement the relevant methods and dunder methods which will output the results below.
    # # Hint : When adding 2 currencies which don’t share the same label you should raise an error.

    def __str__(self):
        if self.amount == 1:
            return f"{self.amount} {self.currency}"
        else:
            return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __repr__(self):
        if self.amount == 1:
            return f"{self.amount} {self.currency}"
        else:
            return f"{self.amount} {self.currency}s"

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            return self.amount + other.amount
        elif isinstance(other, int):
            return self.amount + other
        else:
            return NotImplemented

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            self.amount += other.amount
        elif isinstance(other, int):
            self.amount += other
        else:
            return NotImplemented
        return self


c1 = Currency("dollar", 5)
c2 = Currency("dollar", 10)
c3 = Currency("shekel", 1)
c4 = Currency("shekel", 10)

# # >>> str(c1)
# # '5 dollars'

print(str(c1))

# >>> int(c1)
# 5

print(int(c1))

# >>> repr(c1)
# '5 dollars'

print(repr(c1))

# >>> c1 + 5
# 10

print(c1 + 5)

# >>> c1 + c2
# 15

print(c1 + c2)

# >>> c1
# 5 dollars

print(c1)

# >>> c1 += 5
# >>> c1
# 10 dollars

c1 += 5
print(c1)

# >>> c1 += c2
# >>> c1
# 20 dollars

c1 += c2
print(c1)

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

try:
    print(c1 + c3)
except TypeError as e:
    print(e)


# Exercise 2: Import
# SEE func.py AND exercise_one.py


# Exercise 3: String module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module


import string
import random

letters = string.ascii_letters
random_string = "".join(random.choice(letters) for _ in range(5))
print(random_string)


# Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

from datetime import datetime


def display_current_date():
    current_date = datetime.now().date()
    print("Current date:", current_date)


display_current_date()


# Exercise 5 : Amount of time left until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).


def time_until_new_year():
    now = datetime.now()
    next_year = now.year + 1
    new_year = datetime(next_year, 1, 1)
    time_left = new_year - now

    days_left = time_left.days
    seconds_left = time_left.seconds

    hours_left = seconds_left // 3600
    minutes_left = (seconds_left % 3600) // 60
    seconds_left = seconds_left % 60

    time_formatted = f"{hours_left:02}:{minutes_left:02}:{seconds_left:02}"

    print(f"The 1st of January is in {days_left} days and {time_formatted} hours")


time_until_new_year()


# Exercise 6 : Birthday and minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice),
# then displays a message stating how many minutes the user lived in his life.


def minutes_lived():
    birthdate_str = input("Enter your birthdate (YYYY-MM-DD): ")
    birthdate = datetime.strptime(birthdate_str, "%Y-%m-%d")
    now = datetime.now()
    time_lived = now - birthdate
    minutes = time_lived.days * 1440 + time_lived.seconds // 60
    print(f"You have lived for {minutes} minutes.")


minutes_lived()


# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys:
# name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker

fake = Faker()

users = []


def add_user():
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code(),
    }
    users.append(user)


add_user()

print(users)
