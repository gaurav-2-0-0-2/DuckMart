import csv

#with open('user_attributes.csv', newline='') as csvfile:
#    reader = csv.DictReader(csvfile)
#    print(reader.fieldnames)



with open('user_events.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    print(reader.fieldnames)

