# Instructions :

# The goal of the exercise is to create a class that will help you analyze a specific text.
# A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.


# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# 1. Create a class called Text that takes a string as an argument and store the text in a attribute.
#    Hint: You need to manually copy-paste the text, straight into the code

from collections import Counter


class Text:
    def __init__(self, text):
        self.text = text

    # 2. Implement the following methods:
    #   - a method to return the frequency of a word in the text (assume words are separated by whitespace)
    #     return None or a meaningful message.

    def word_frequency(self, word):
        words = self.text.split()
        frequency = words.count(word)
        return frequency if frequency > 0 else None

    #   - a method that returns the most common word in the text.

    def most_common_word(self):
        words = self.text.split()
        if not words:
            return None

        word_counts = Counter(words)
        most_common_result = word_counts.most_common(1)[0]
        return most_common_result[0]

    #   - a method that returns a list of all the unique words in the text.

    def unique_words(self):
        words = self.text.split()
        unique_words_set = set(words)
        return list(unique_words_set)

    # Part II
    # Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

    # 1. Implement a classmethod that returns a Text instance but with a text file:

    #    >>> Text.from_file('the_stranger.txt')

    #    Hint: You need to open and read the text from the text file.

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as file:
            text = file.read()
        return cls(text)


# 2. Now, use the provided the_stranger.txt file and try using the class you created above.

text_string = Text("A good book would sometimes cost as much as a good house.")
print(text_string.word_frequency("good"))
print(text_string.word_frequency("cost"))
print(text_string.word_frequency("bad"))
print(text_string.most_common_word())
print(text_string.unique_words())

text_from_file = Text.from_file("the_stranger.txt")
print(text_from_file.word_frequency("good"))
print(text_from_file.most_common_word())
# print(text_from_file.unique_words())
