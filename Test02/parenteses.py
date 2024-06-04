def parenteses(str):
    count = 0
    for char in str:
        if char == '(':
            count += 1
        elif char == ')':
            count -= 1
            if count < 0:
                return 0
    return 1 if count == 0 else 0

print(parenteses("(hello (world))"))  
print(parenteses("((hello (world))")) 
print(parenteses("hello world"))      