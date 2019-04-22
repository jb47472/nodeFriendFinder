FriendFinder
The Friend Finder app is a full stack app that finds a user's most compatible friend match by comparing their answer to the survey questions to the answers of the other users. Each user's profile is stored in the database in a JSON format. Friend Finder utilizes Express to handle routing and Heroku in order for others to access it.

How It Works...

A databse is set up server-side storing each user's name, photo and answers to the 10 survey questions. Each time a new user fills out their profile, their information is stored as a JSON object in the database, while simulataneously comparing their answers to the answers of the other users stored in the database in order to calculate the closest match, thereby finding the friend with the most compatibility. The result is then presented to the new user via a modal popup with their match's name and photo.

Behind the Scenes...

Upon start up of the app, a connection to the PORT is established, and direction of the server to the neccessary routes are established.

Upon clicking of the "Take the Survey" button, the 'Survey' page is called using the server routes established.

The data from the input fields entered by the user, through use of a drop-down selection box, is gathered upon clicking the "Find Your Match" button.

Clicking this button takes the information and stores it in a JSON object in the database and can be viewed in the '/api/friends' link.

At this same time the above action is taking place, the answers from the user input is compared to the input from previous users stored in the database, by calculating the difference in the sum of their answers. The lower the total difference the closer the match.

The stored user that has the least total difference when compared to the new user is determined at their match and the stored user's name and photo are presented to the new user via a pop-up modal.

That new user's info is now stored in the database and ready to be compared to the next new user's data.

This app is currently working with errors, perhaps one day I will revisit the app and fix the bugs.