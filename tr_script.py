import csv 

#User Attributes
with open('user_attributes.csv', newline ='') as csvfile:
    reader = csv.DictReader(csvfile)
    user_attributes = []
    for row in reader:
        user_attribute = {}
        user_attribute['user_id'] = int(row['id'])
        user_attribute['first_name'] = row['first_name']
        user_attribute['last_name'] = row['last_name']
        user_attribute['age'] = int(row['age'])
        user_attribute['gender'] = row['gender']
        user_attribute['location'] = row['location']
        user_attribute['signUpDate'] = row['signUpDate']
        user_attribute['subscriptionPlan'] = row['subscriptionPlan']
        user_attribute['deviceType'] = row['deviceType']
        user_attributes.append(user_attribute)
        
#print(user_attributes)

# Write the output to a new CSV file
with open('user_attributes_tr.csv', 'w', newline='') as csvfile:
    fieldnames = ['user_id', 'first_name', 'last_name','email','age', 'gender', 'location', 'signUpDate', 'subscriptionPlan', 'deviceType']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for user_attribute in user_attributes:
        writer.writerow(user_attribute)
        
        

