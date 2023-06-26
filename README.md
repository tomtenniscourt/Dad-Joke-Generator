ReadMe Project Two: API 'Dad Jokes'

Description

This is a simple app that allows users to randomly generate one of 5,000 'dad jokes' from an API. If the user likes the joke, they can save them to a list featured on another page within the app (called 'Saved') or simply generate a new joke to replace it. When the User navigates to the 'Saved' page, theyare presented with a list of all the jokes they have saved from the previous page. 

The User can also upload their own joke to this page, and edit both the randomoy generated saved joke and their own if they so choose. 

If the user wishes to remove an indivudual joke, multiple jokes, or all the jokes from the list, there are options available that will allow them to do this. For example, there is a 'Remove Selected' button, and a 'Remove All' button. 

Deployment link

xxxx

Getting Started/Code Installation

The game’s link will be found here. No login information is required. 



Timeframe & Working Team (Solo/Pair/Group)

The game was entirely worked on by me. Occasionally I would have a second pair of eyes look over certain sections to asses where certain issues were, however this was minimal. 


Technologies Used

The following technologies were used throughout the process:
HTML 
CSS 
JavaScript 
Google Fonts 
jspaint.app 
https://icanhazdadjoke.com/api#fetch-a-random-dad-joke

Brief

The following brief was given to me to work from:

General

Build a web application from scratch, without a starter codebase. Must be your own work.
Use React with create-react-app to build your application.
Plan your application using wireframes and user stories.
Craft a README.md file that explains your app to the world.
Deploy your app online, where the rest of the world can access it.


Technical
Select a Project Idea of your own. But the user must be able to:
Add a new item to a list
Mark the item as complete/favorite/(watch, read, listen) later/flag/etc
Edit an item from a list
Remove an item from a list
Clear/delete all items
Clear/delete only marked items
Fetch data from at least one 3rd party API using Axios or fetch.
Make frequent Git commits with descriptive messages, explaining your commit.
Use React Router to handle multiple pages/views.

User Stories:
As a user, I should be able to generate a random joke
As a user, I should be able to save a joke I like to the 'Saved' page
As a user, I should be able to replace the generated joke with another one
As a user, I should be able to view my saved jokes on a seperate page
As a user, I should be able to upload my own joke to the 'Saved' page list
As a user, I should not be able to upload a blank joke
As a user, I should be able to remove indivudual, several, or all jokes from the 'Saved' page
As a user, I should be shown a message when I win, lose or tie


Planning

I started by sketching out a basic wireframe using a very basic paint app, and then proceeded to create my vision using very basic HTML and CSS. My belief was that if I could see everything visualised on the screen, it was be easier to create the necessary JavaScript that would interact with everything. 

The wireframes for the two main pages can be seen below (Please Note, when I started, I was intending to have randomly generated facts, but came to the conculsion that jokes would be more interesting - hence why some of the labels in these images are incorrect):



Wireframe Home Page:

![image](https://media.git.generalassemb.ly/user/48202/files/11565329-be5b-4376-b32f-c5a7ae587249)

Wireframe Saved Page

![image](https://media.git.generalassemb.ly/user/48202/files/466ef5c9-d861-400b-ac84-76a975d24622)





Build/Code Process

The main approach i took for this game was to build out the static html and css on both pages so that I would be able to visualise everything on the screen.

I used `fetch` to gather data from the chosen api, and created a function that would allow users to view the data on the screen by pressing a button. A new button was created, and a function applied to it that allowed users to save the data from the api, store it, and display it on the next page. Additional buttons and functions were created to allow users to edit the data, remove the data, or create new data that could be applioed to the list.

When all of the technical code was in place, I was able to then style everything with css to give it a more dignified look, whilst also keeping it simple. 



Challenges

I stuggled very much with the saved page and its associated functions - however most chalenging was probably getting the check boxes applied to each joke to listen to only their joke, and not the rest of the jokes. For example, for a while, everytime I clicked on one check box, they would all get marked. Furthermore, when this issue was fixed, I was still unable to only delete the ones that had been marked. 

Adding sound bites were also very challenging. Both this and adding additional content such as another API will be attempted when I readdress this project.

I faced some difficulty with CSS styling as well.


Most of these challenges I managed to solve by going through old course notes, previous homeworks and exercises, and researching on websites such as W3, YouTube, GeeksForGeeks, and CodeBrainer. I was also able to draw on the experience of my classmates and tutors.

Key Learnings/Takeaways

Key learnings for me were how to effectively navigate across multiple pages, and import different css codes for different elements. These proved to be challenging at first, however I feel thaT i now have the hand of it. 

Bugs

As mentioned previously, there was a case where by I was unable to get the checkboxes to properly listen to the user interavtions, and this persisted even after It appeared that I had solved the issues. Thankfully, it seems to be fixed for now. 

Future Improvements

I will want to include a second API function in one of the empty pages I have included in this app - such as randoml generating facts for the user. I will also include a copy of the ReadMe in the 'About' section once I am happy with the text.  




