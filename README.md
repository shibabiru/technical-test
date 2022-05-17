# Temperature Conversion

__[Temperature Conversion](https://shibabiru.github.io/technical-test/) is QUICKLY convert temperatures between Celsius and Fahrenheit!
You can also switch between dark mode and light mode！__

<img width="671" alt="スクリーンショット 2022-05-17 19 32 54" src="https://user-images.githubusercontent.com/87594563/168797945-18ea47e7-49a1-4e58-8891-97061bc8ddc6.png">　


## Table of content
- [Demo](#Demo)
- [Description](#Description)
- [Requirement](#Requirement)
- [Usage](#Usage)
- [Deploy](#Deploy)

## Demo
Please check it out!

https://user-images.githubusercontent.com/87594563/168802032-509af271-717e-48ed-90b1-b668f692fbd7.mov

## Description
- __Purpose of this web application__
  - A service that allows anyone in the world to check the temrerature instantly
- __Why I made this UI　designs__
  - Modeled on a globe reminiscent of the world
  - Emphasize design elements in 3D to give a visually more enjoyable user experience
  - By rotating the earth, it shows that it corresponds to the whole world without deciding on a specific country.
    For that, I used Three.js. Since Three.js can be used in JavaScript just by quoting Script, it can be implemented with less person-hours
  - When the temperature is input, the converted temperature is displayed instantly. This means that you don't have to press the temperature conversion button or any other process
- __Why I made this Light-mode and Dark-mode UI designs__
  - Switching between light-mode and dark-mode is reminiscent of day and night
  - Using the color contrast, I made it a mode switch button that users want to press
  - I used JavaScript, HTML and CSS. That's because when switching modes, I wanted to invert the colors in order to unify the colors, so I wanted to use "mix-blend-mode" for CSS.
    It is simple to add processing with JavaScript that I used from the beginning, so I decided to use them.
## Requirement
- JavaScript
- HTML
- CSS
- Three.js

## Usage
1. Clone the repository
   1. Open the terminal
   2. Change the current working directory to the location where you want to clone the directory
   3. Enter git clone command
      
      ```
      $ git clone git@github.com:shibabiru/technical-test.git
      Cloning into 'technical-test'...
      remote: Enumerating objects: 42, done.
      remote: Counting objects: 100% (42/42), done.
      remote: Compressing objects: 100% (25/25), done.
      remote: Total 42 (delta 13), reused 35 (delta 10), pack-reused 0
      Receiving objects: 100% (42/42), 343.86 KiB | 794.00 KiB/s, done.
      Resolving deltas: 100% (13/13), done.
      ```

## Deploy
1. Set from GitHub
   1. ``Repository`` > ``Setting`` > ``GitHub Pages``
   2. ``Source`` - Select　source: You can publish by selecting the branch and directory you want to publish (root or docs directory only)
   3. ``Save``
   4. After a short while, the URL will be published. __https: // (user name) .github.io / (Repository name)__ You have now enabled Github Pages
   5. ``Custom domain`` - Add __(username) .github.io__ 
   6. ``Save``  If you check Enforce HTTPS, it will be SSL
