## Social Network API

# Description
This Social Network API is a backend application that simulates a simple social networking service. It allows for the creation, update, and management of user profiles and their thoughts, as well as the ability to add reactions to thoughts and manage a user's friend list. Utilizing MongoDB for our database, we ensure flexibility and efficiency in handling large volumes of unstructured data, providing a seamless experience for managing social interactions in our network.

## Features
Server Initialization: Easy-to-start server, syncing Mongoose models with MongoDB for a robust and efficient data storage solution.
CRUD Operations for Users and Thoughts: Full support for creating, reading, updating, and deleting (CRUD) users and thoughts, enabling dynamic social interactions.
Reactions and Friends Management: Ability to post reactions to thoughts and manage user's friend lists, enhancing the social networking experience.

## Getting Started
To get the server running, follow these simple steps:

# Start the Server: Run the command specified in your package.json file to start the server. This initializes the connection to MongoDB and syncs the Mongoose models.
npm start

# Open API Routes: 
Use Insomnia or any other API testing tool to interact with the API.

## Acceptance Criteria
Server and Database Sync: Upon starting the application, the server is initiated and Mongoose models are synced to the MongoDB database, ensuring a smooth and efficient backend operation.

## CRUD Operations via API Routes:

# GET Routes: 
Accessing API GET routes for users and thoughts displays the data in a formatted JSON, allowing for easy data retrieval.

# POST, PUT, DELETE Routes: 
These routes enable the creation, updating, and deletion of users and thoughts, facilitating a dynamic and interactive user experience.

## Enhanced Social Features:

## Managing Reactions and Friends:
Through API POST and DELETE routes, users can effortlessly create and remove reactions to thoughts and manage their friend lists, further enriching the social networking functionality.

## Usage
This API is designed to be used as a backend for social network applications. It provides developers with the necessary endpoints to manage user interactions, such as posting thoughts, reacting to posts, and managing friends lists, making it an ideal backbone for any social networking project.

## Conclusion
Our Social Network API is a powerful and flexible backend solution for managing a wide array of social networking features. With comprehensive support for CRUD operations, along with features for reactions and friends management, this API is capable of powering a diverse range of social network applications, providing a robust foundation for developers to build upon.