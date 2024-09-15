# Instructions
# Part 1 : Quizz :
# Answer the following questions

# What is a class?

""" a user defined data structure allowing to create objects with specified attributes and behaviours(methods) """

# What is an instance?

""" a specific object created from a class that has its own attributes but also has 
    access to the class attributes and methods defined in the class """

# What is encapsulation?

""" restricting access to methods and variables in order to prevent data from direct modification """

# What is abstraction?

""" hiding complex implementation details and showing only the essential features of an object """

# What is inheritance?

""" inheriting properties and behaviors by one class from another """

# What is multiple inheritance?

""" inheriting properties and behaviors from than one class """

# What is polymorphism?

""" different or related classes that using the same names for their functions """

# What is method resolution order or MRO?

""" the order in which a method is searched for in classes """


# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.
#
# The requirements are as follows:
#
# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
#
# The Deck class :
#   should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#   should have a method called deal which deals a single card from the deck.
#    After a card is dealt, it should be removed from the deck.

import random


class Card:
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    def __init__(self):
        self.cards = [Card(suit, value) for suit in Card.suits for value in Card.values]
        self.shuffle()

    def shuffle(self):
        if len(self.cards) != 52:
            raise ValueError("Deck does not have 52 cards")
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            raise ValueError("All cards have been dealt")
        return self.cards.pop()


deck = Deck()
print(deck.deal())

try:
    deck.shuffle()
except ValueError as e:
    print(f"Error: {e}")
