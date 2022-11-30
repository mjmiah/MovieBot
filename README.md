# MovieBot
Discord Bot coded in discord.js (a Node.js library) which uses the OMDb API to fetch data from IMDb.
The user inputs a title on commmand and it sends an API call to the OMDb API which searches for the entry in the IMDb databases, and then it outputs fields of data such as the description, release date, genre, directors, writers, actors and poster.
# Commands
%movie [title] - search IMDb for a movie
%show [title] - search IMDb for a show
As the IMDb entries are extensive, make sure the title is as accurate as possible e.g '%movie Spider-Man' instead of '%movie Spiderman' to find the 2002 Sam Raimi movie.

# How to use my file
Make sure you have Node.js, discord.js and node-fetch installed (you can do this via npm). You will need to create a bot on the Discord developer portal, you can find a tutorial online on how to set this up. From here, copy the token and paste it inside the speechmarks on line 97 where it says client.login(""), so if the token was literally 'token' then we would have client.login("token"). You also need to obtain an OMDb API key from omdbapi.com, and once you have generated and activated the API key you similarly copy and paste this into line 6, so if the apikey was literally 'apikey' then we would have const apikey = 'apikey'.
# Demonstration
![image](https://user-images.githubusercontent.com/65255238/204690372-48d1b14a-1e57-4f97-8e71-e35bd0cb4c1e.png)
![image](https://user-images.githubusercontent.com/65255238/204690436-69753c81-437e-4f54-a2a6-9cb3e020f189.png)
