import os
import json
import copy
import sys

countAll = 0

# Function to rename files
def renameMultiple(folderName):
  global countAll
  tempNameList = []
  for count in range(len(src_list)):
    tempNameList.append(currentDir + "/" + folderName + str(count) + ".jpg")

  tempNameList = sorted(tempNameList, key=str.lower)

  print(i, f, len(src_list))

  for count in range(len(src_list)):

    #dst = tempNameList[count]
    #src = currentDir + "/" + src_list[count]
    #print(dst, src)

    countAll += 1
    #if not dst == src:
      #print("dst !== src")
      #os.rename(src, dst)

# Initialize json container
database = {}

### navigate from base path
basePath = os.getcwd() # get current base path

list_base = os.listdir(os.getcwd()) # list of files in current base path

for i in list_base:
  if os.path.isdir(i): # check if directory

    database[i] = { # initialize container for each image folder
      "name": "",
      "path": "",
      "folders": [],
      "length": ""
    }

    database[i]["name"] = i # add name of each image folder to json container

    database[i]["path"] = basePath + "/" + str(i) # add filepath of each image folder to json container

    os.chdir(database[i]["path"]) # change directory to image folder

    list_folder = os.listdir(os.getcwd()) # list files in the folder

    database[i]["length"] = len(list_folder) # add length of the list to json container

    # each folder in image collection
    for f in list_folder:
      #print(f)
      
      if os.path.isdir(f): # check if directory~

        tempObj = {} # initialize temp object

        tempObj["name"] = f # add names of each folder

        os.chdir(os.getcwd() + "/" + f) # navigate to each folder

        currentDir = copy.deepcopy(os.getcwd()) # create deep copy of current directory

        src_list = copy.deepcopy(os.listdir(currentDir)) # create deep copy of list

        src_list = sorted(src_list, key=str.lower)

        if __name__ == '__main__':
          renameMultiple(f) # call rename multiple function

        tempList = os.listdir(os.getcwd()) # get list of files in current working directory

        tempObj["files"] = tempList # list files in each folder

        tempObj["length"] = len(tempList) # get length of each folder

        database[i]["folders"].append(tempObj) # add to database

        os.chdir("../") #

    os.chdir("../") # 

#print(database)

with open('database.json', 'w') as json_file:
  json.dump(database, json_file)

print(countAll)