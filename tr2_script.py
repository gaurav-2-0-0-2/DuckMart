
import csv

# User Event 
with open('user_events.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    user_events = []
    for row in reader:
        user_event = {}
        user_event['user_id'] = int(row['id'])
        user_event['event_name'] = row['eventName']
        user_event['timestamp'] = row['timestamp']
        user_events.append(user_event)
    
with open('user_events_tr.csv', 'w', newline='') as csvfile:
    fieldnames = ['user_id', 'event_name','timestamp']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for user_event in user_events:
        writer.writerow(user_event)
