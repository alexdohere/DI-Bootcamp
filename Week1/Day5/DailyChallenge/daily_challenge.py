# Challenge 1 : Sorting
# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints
# the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

user_input = input("Enter a comma-separated sequence of words: ")

word_list = [word for word in user_input.split(",")]

sorted_list = sorted(word_list)

result_string = ",".join(sorted_list)

print(result_string)


# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"s


def longest_word(sentence):
    words = sentence.split()
    current_longest = ""

    for word in words:
        if len(word) > len(current_longest):
            current_longest = word

    return current_longest


result1 = longest_word("Margaret's toy is a pretty doll.")
result2 = longest_word("A thing of beauty is a joy forever.")
result3 = longest_word("Forgetfulness is by all means powerless!")

print(result1)
print(result2)
print(result3)
