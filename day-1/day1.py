with open('day1-ex.txt', 'r') as f:
    lines = f.readlines()
    print(lines)
    calories = [entry.strip() for entry in lines]
    print(calories)
