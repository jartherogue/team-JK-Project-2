# team-JK-Project-2

Description of the tables:
The activities table will have a belongsTo relationship with the User table
Fields for activities table are ID, Date, Time, City, State, Image, Description, FK ID, Expiration, TimeStamp

When a user creates an activity we want the DB to populate with all the info. the only field that can be null is the image field. One user should be able to create many activities.

the expiration date should destroy the activity from the db AFTER the date and time of the activity. 