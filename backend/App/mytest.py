import random
import string

print(min(60, 23, 100, 666))
print(''.join(random.sample(string.ascii_letters + string.digits, 60)))
print(random.sample('zyxwvutsrqponmlkjihgfedcba', 10))
print(string.ascii_letters + string.digits)
print(random.randint(1, 15))