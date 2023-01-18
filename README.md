## Introduction
Automating airmalta website using Cypress with Very basic page object model.

## FrameWork Description:
    **/fixtures:** is having all the data providers for the test scripts using .json file.

    ** /integration: ** is having all the files related to pageObjects and Specs

        ** /integration/page-objects: ** is having all the pageObjects file for the individual webpage
### Note: index-page.ts is the base page and description for the page is also available in the respective file.

       ** /integration/test: ** is having specs/ test file for all the test scripts.

    ** cypress.json ** is having all the cypress configuration
    
    ** package.json: ** is having all the dependencies need for the project.
### Deliberately using older version of cypress because of my companies laptop/network restriction (can't download any other version).
        * webpack-preprocessor * for binding cypress and typescript.
        * testing-library/cypress and cypress-xpath * dom testing libraries.


# How to execute test:

##      Environment:
            * Java version * 17.0.2
            * node version: * 16.13.2
            * npm version: * 8.1.2
    ** Note: haven't tried on any other environment so not sure whether it'll work on other environment. **
    ** Working fine on windows **

    ** Step 1: ** clone the project
        Command: git clone 
    ** Step2: ** install all the dependencies
        Command: npm run cy:install
    ** Step 3: ** execute in headless mode
        Command: npm run cy:run
    * Note: this command will generate a execution video .mp4 file under videos/test. *
    ** Step 4: ** execute in debug mode
        Command: npm run cy:open
        now click on the script you want to execute.






