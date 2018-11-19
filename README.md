# react-exam 

This app is the OFFICIAL **jedi management tool**. For now, it only
displays the most famous of them.
 
Our CTO has looked at the source code and has seen that it doesn't follow
good practices.
He also wants to add a new feature to the app: The ability to register 
a new jedi.

## Tasks
### Clean up
Clean up the project and make it follows react/redux app good
practices. This will help you to add to it more features.

### Add a new jedi to the DB
Create all the necessary things to register a new jedi.

Hint: All files that you should modify are in `./src`

## Getting started
Launch the front-end server with:
```
npm start
```

Launch the API server (in a second terminal) with:
```
npm run api
```

Be sure that the project is compiling before pushing with the command:
```
npm run compile
```

## How to?
Fork this project and create a pull request on this repository from your fork.


## Work summary

### Clean up
I seperated actions, reducers and components and images in different folders.


**In the reducers folder**: The reducer.js file connects all the different reducers. For now there is only jedi.js because it's the only item in the state. But if we also wanted a list of Sith, there would be a new item in the state and a new reducer called `sith.js`

**In the actions folder**: for now there is only one file, but as the project grows it will be easier to maintain if actions are seperated in different files. We could seperate them according to state as well for example.

**In the component folder**: each component is in its own folder. I used the container component pattern where each components owns a container component and a view component. The container should be the only one to be aware of Redux and the only one to describe the logic behind the component. The view only describes what the component looks like and if possible only have a render function in this class.

According to this pattern, I put the jedi list in a different component from which the container dispatches the fetch action and the view maps the list.

### Adding a new Jedi
I created a new component called `JediForm`.
It's composed of a text input and a send button. When clicked, if the input is not empty, the button dispatches an action, called `ADD_FINISH`. This action sends a POST request to the api with the name of the new jedi. The reducer then updates the state to add the new Jedi's name and id at the end of the list.



