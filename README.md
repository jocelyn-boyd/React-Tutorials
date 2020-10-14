# React-Tutorial
Full React Course 2020 @ freecodecamp.org 

### Notes

### About
- An open-source JavaScript library for building UI
- Developed by Facebook in 2011
- Competitors: Angular, Vue, Svelte
- It’s all about components
    -  Benefits: can build a bunch of independent, isolated and reusable user interface 
- Speed -> Uses virtual DOM
    -  where only the component that needs to be updated is affected
    -  This is done without re-rendering the old app 

### Goals 
- Aware of external resources 
- Comfortable with using them when I want to learning something new about React 
- Comfortable applying theory to practice by building my own project using React 

- Getting Comfortable -> Applying theory -> Building my own projects 
- Adapt a student mindset where I’m always open to expanding my React knowledge

### Requirements
- HTML
- CSS
- JavaScript (ES6)
- Coding Addict - [JavaScript Nuggets](https://www.youtube.com/playlist?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ)
    - covers React specific JavaScript topics
    
### Useful Terminal Commands 
- **pwd**: full pathname to current working directory
- **ls**: list of directories
- **ls -a**: to see the list of directories including the hidden ones 
- **mkdir**: create a new directory/ folder 
- **cd**:  change directory 
- **cd ..:** navigate to parent/ one level up
- **clear**: clear console

### NPM (Node Package Manager) Basics 
- **node -- version**
*check node version*

- **npm init**
*creates a package.json (manifest) file, list of dependencies*

- **npm install <package name> --save**
*install package locally (default) and add to package.json in the project* 

**npm install <package name> -g**
 *install package globally (access anywhere) SUDO*

**npm intall <package name> - - save -dev**
 *use it only in development (ie. Testing)*  



[Create-React-App](https://github.com/john-smilga/react-basics-2020)
a. npx create-react-app <file name>
b. cd <file name>
c. npm start
    - stars the development server
    - https://www.hostinger.com/tutorials/what-is-localhost    
d. npm run build 
    - Bundles the app into static files for production
e. npm run test 
    - starts the test runner 
f. npm run eject 
    - Removes this tool and copies build dependencies configuration files and scripts into the app directory. If you do this, you can’t go back. 
