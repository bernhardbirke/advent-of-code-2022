# %%
# opening input file
with open('day7-input.txt', 'r') as f:
    lines = f.readlines()
    lines = [entry.strip() for entry in lines]
    print(lines)


# %%
# Prepare lines. convert lines with filesize to integer value.
i = 0
for i in range(len(lines)):
    if "$" in lines[i]:
        i += 1
        continue
    elif "dir" in lines[i]:
        i += 1
        continue
    else:
        lines[i] = int(lines[i][:lines[i].index(" ")])
        i += 1

lines

# %%
# functions to browse the directory


def cdStart():
    """
    #set starting directory
    """
    currentDirectory = "/"
    return currentDirectory


def cdDotDot(currentDirectory):
    """
    #move out one level in directory path
    """
    indexOfSlash = -1
    i = len(currentDirectory)-1
    while True:
        if currentDirectory[i] == "/":
            indexOfSlash = i
            break
        i -= 1
    curDirectory = currentDirectory[:indexOfSlash]
    return curDirectory


def cdFolder(folder, currentDirectory):
    """
    move in one level in folder(Folder)
    """
    curDirectory = currentDirectory+"/"+folder
    return curDirectory


# %%
# dictionary with path+folders and the corresponding filesizes inside
directoryAndFiles = {}

# %%
# initialize the folderstructure. Adding filesize 0 for all folders.
for entry in lines:
    if type(entry) == int:
        continue
    elif entry == "$ cd /":
        currentDirectory = cdStart()
        directoryAndFiles[currentDirectory] = 0
    elif entry == "$ cd ..":
        currentDirectory = cdDotDot(currentDirectory)
        print(currentDirectory)
    elif entry[:4] == "$ cd":
        folder = entry[5:]
        currentDirectory = cdFolder(folder, currentDirectory)
        directoryAndFiles[currentDirectory] = 0
        print(currentDirectory)
    else:
        continue

# %%
directoryAndFiles

# %%
# run through the commandlines and execute them using the functions defined. Sum up filesize per folder.
for entry in lines:
    if type(entry) == int:
        directoryAndFiles[currentDirectory] += entry
    elif entry == '$ cd /':
        currentDirectory = cdStart()
    elif entry == "$ cd ..":
        currentDirectory = cdDotDot(currentDirectory)
    elif entry[:4] == "$ cd":
        folder = entry[5:]
        currentDirectory = cdFolder(folder, currentDirectory)
    else:
        continue

# %%
directoryAndFiles

# %%
# dictionary with path+folders and the corresponding sums of filesizes
directoryAndSums = directoryAndFiles.copy()
directoryAndSums

# %%
# total size of each directory.
# The total size of a directory is the sum of the sizes of the files it contains, directly or indirectly.
for element in directoryAndFiles:
    for folder in directoryAndFiles:
        if folder == element:
            continue
        elif element in folder:
            directoryAndSums[element] += directoryAndFiles[folder]
directoryAndSums

# %%
# find all of the directories with a total size of at most 100000,
# then calculate the sum of their total sizes.
# solution of part1
sumOfTotal = 0
for folder in directoryAndSums:
    if directoryAndSums[folder] <= 100000:
        sumOfTotal += directoryAndSums[folder]
print(sumOfTotal)

# %%
# part 2

# necessary file size to delete
sizeNecessary = 30000000 - (70000000 - directoryAndSums["/"])
# The update still requires a directory with total size to be deleted before it can run.
# Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update.
# What is the total size of that directory?
possibleDirectories = []
for folder in directoryAndSums:
    if directoryAndSums[folder] >= sizeNecessary:
        possibleDirectories.append(directoryAndSums[folder])


possibleDirectories
possibleDirectories.sort()
possibleDirectories[0]
print(possibleDirectories[0])
# %%
