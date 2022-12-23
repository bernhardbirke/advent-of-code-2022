# %%
# opening input file
with open('day6-input.txt', 'r') as f:
    text = f.read().strip()
    print(text)
# make a List of the text
textList = list(text)


# %%
# function to check if 4 characters are different
def checkFourLetters(textList):
    i = 4
    for i in range(len(textList)):
        fourLetterSet = set(textList[i-4:i])
        if len(fourLetterSet) == 4:
            print(fourLetterSet)
            print(i)
            return i
            break


# %%
# function to check if 14 characters are different
def checkFourteenLetters(textList):
    i = 14
    for i in range(len(textList)):
        fourLetterSet = set(textList[i-14:i])
        if len(fourLetterSet) == 14:
            print(fourLetterSet)
            print(i)
            return i
            break


# %%
# solution of part 1
print(checkFourLetters(textList))

# %%
# solution of part2
print(checkFourteenLetters(textList))

# %%
