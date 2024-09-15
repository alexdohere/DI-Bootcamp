#    Instructions

# 1. Create a new file called anagram_checker.py which contains a class called AnagramChecker.

# 2. The class should have the following methods:

#    __init__ - should load the word list file (text file) into a variable, so that it can be
#       searched later on in the code.

#    is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.

#    get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)

#    Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.

#    Note: None of the methods in the class should print anything.


class AnagramChecker:
    def __init__(self, filename):
        self.words_set = set()
        with open(filename, "r") as file:
            for line in file:
                word = line.strip().lower()
                if word:
                    self.words_set.add(word)

    def is_valid_word(self, word):
        return word.lower() in self.words_set

    def get_anagrams(self, word):
        word = word.lower()
        anagrams = [w for w in self.words_set if self.is_anagram(word, w) and w != word]
        return anagrams

    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2)


# 3. Now create another Python file, called anagrams.py. This will contain all the UI (user interface)
#      functionality of your program, and will rely on AnagramChecker for the anagram-related logic.
