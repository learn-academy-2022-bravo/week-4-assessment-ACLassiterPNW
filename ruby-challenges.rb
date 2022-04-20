# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
# #Method name: if_even_or_odd
# #Parameter: number
# #Use conditional statement with .even and .odd methods to determine if number is even or odd. 
def if_even_or_odd(number)
    if number.even?
        "#{number} is even"
    else 
        "#{number} is odd"
    end
end 

p if_even_or_odd(num1)
p if_even_or_odd(num2)
p if_even_or_odd(num3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# #Method name: remove_vowels
# #Parameter: string
# #Use .delete method to remove vowels, identifying lowercase and uppercase vowels 
def remove_vowels(string)
    string.delete('aeiouAEIOU')
end

p remove_vowels(album1)
p remove_vowels(album2)
p remove_vowels(album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#Method name: palindrome_string
#Parameter: string
#Use conditional statement to determine if the input string is a palindrome (does the string read the same in reverse?)
#Use .downcase method to return a string with its uppercase letters replaced by lowercase letters, for palindrome evaluation
#Use .reverse method to return the input string in reverse 

def palindrome_string(string)
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end 
end

    p palindrome_string(palindrome_tester1)
    p palindrome_string(palindrome_tester2)
    p palindrome_string(palindrome_tester3)