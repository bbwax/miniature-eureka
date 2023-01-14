#Note Taker
A simple application that allows users to write and save notes. It uses an Express.js back-end and stores note data in a JSON file.
![img](https://github.com/bbwax/miniature-eureka/blob/main/public/img/pic.png?raw=true)

##Installation
To install the application, follow these steps:

 -Clone the repository to your local machine: git clone https://github.com/bbwax/note-taker.git
-Navigate to the root directory of the project: cd note-taker
-Install the required dependencies by running npm install
-Start the application by running npm start

##Usage
The application has the following endpoints:

-GET /api/notes: Retrieves all notes
-POST /api/notes: Saves a new note. The request body should contain the note data in JSON format.
-DELETE /api/notes/:id: Deletes a note with the specified id.
##Deployment
The application is deployed on Heroku and can be accessed at https://note-taker-bwax.herokuapp.com/

##License
This project is licensed under the MIT License - see the LICENSE file for details.

#Acknowledgments
-This application uses the uuid package for generating unique ids for notes.
-The application uses a JSON file to store the notes data.
-The application uses the Express.js framework for creating the back-end of the application.
-The application is deployed on Heroku Platform.