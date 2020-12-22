Project 2:

YourSpace: Share the Planet!

It's a big, beautiful world, and for millenia, humans have been beautifying their own little corners of living space on this planet with their inspired touches to bring them extra joy. Whether it's a rooftop oasis in a busy urban setting, a sunny spot beneath a pergola in a suburban backyard, or a highly productive workspace designed to provide extra inspiration for the creative spirit, there are countless locations that we would all love to spend time in, or emulate, if we could. And many of the owners of those spaces wouldn't mind sharing, if they could. 

YourSpace makes that possible, providing a platform for those with a yearning to enjoy a different vista for a special gathering, or acquire or hone a new skill in a well-equipped workshop to meet those who would be happy to share their own. 

YourSpace allows for daily short-term rentals of these "dream spaces", in four-hour increments. Would-be renters can peruse photos of locations provided by "hosts" divided into three main categories: Urban (such as a romantic rooftop deck), Outdoor (everything from a well-tended garden with a patio to a deluxe cabana with a swimming pool attached) and Studio (places where creativity happen: a woodworker's paradise with all the right tools, an artist's perfectly-lit painting studio, a potter's shed, complete with kiln).

A typical User's Story goes like this:

FOR THE PROSPECTIVE RENTER:

WHEN a user enters our URL THEN they will be presented with the YourSpace homepage. They will be presented with a description of the YourSpace application, 3 pictures representing the 3 categories of rentable spaces, and clickable "Studio", "Urban", or "Outdoor" buttons.

WHEN a user clicks, THEN they are taken to the respective page populated with listings in the chosen category. 

WHEN that page is reached the user will see cels that display pictures of the rentable spaces along with a title and description. WHEN the user chooses a space, by clicking on it, THEN they will be taken to the page devoted to that particular space.

WHEN the user reaches that page, THEN they will be presented with pictures and a description the space, and fields to input first name, last name, email, phone number, preferred time block, number of guests, and the purpose for using the space. A “book” button will be displayed as well as a button to “delete” or "change" their reservation information. 

WHEN the user clicks the “book” button, THEN they are presented with a prompt that confirms their reservation and the chosen space is removed from the group of available spaces in that time slot.

FOR A POTENTIAL HOST:

WHEN a potential host enters the site THEN they will be given the opportunity to list their space by clicking the “become a host” button on the Home Page navbar. 

WHEN the “become a host” button is clicked, THEN the user is taken to a page  where they will be presented with a form that has fields for first name, last name, email, phone number, property type and description, an option to upload a picture, and a “submit” button. This information will be saved in our database and the listing will populate its respective page.

WHEN a host wants to delete their listing, THEN they must find their listing by inputting their email, choosing the particular listing of theirs presented to them, and deleting the post.  WHEN the user deletes a post THEN all of the information regarding the space is removed from the database. 


INSTALLATION:

1. Please visit GitHub and search for User AyannaAziz.
2. Once there, look inside the repository tab and select Project-2.
3. Clone Project-2
4. From there, execute a git pull and type "code ." to open in Visual Studio Code and begin editing.


COLLABORATORS:

The following developers are responsible for the content on this page:
* Alma Aziz
* Somer Jackson
* Steven McCarther
* Philip Marzullo

Many thanks to our Instructor, TA's and Tutors who have patiently made it all possible, and provide the inspiration to make us better coders.

LICENSE:

MIT License

Copyright © 2020 Philip Marzullo, Alma Aziz, Somer Jackson, Steven McCarther

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

CREDITS: 

* Materialize
* Pinterest
* Trello
* Lucidchart
* Heroku
* mySQL




























# project-2-starter

## Initial App Setup

- `touch server.js`
- `npm init -y`
- `npm install express express-handlebars sequelize mysql2`

## Server Setup

1. Require express
2. Create an instance of express `app`
3. Create a port. Ensure you account for the environment variable in Heroku.
4. Listen on the port.
5. Add routes (`/api/config` is great for testing)

Confirm all this works. Then . . .

6. Add body parsing middleware.
7. Optional: Add in the express static route use for public folder

## Handlebars Setup

1. Require `express-handlebars`
2. Configure express-handlebars.
3. Create the folder structure (/views/layouts/main.handlebars)
4. Create an index.handlebars to inject into the `{{{body}}}`
5. Add get route to `res.render` index.

## Sequelize Setup

1. Run `sequelize init:config & sequelize init:models` (Confirm when you see config and models directories)
2. Create `schema.sql` file to store your new database creation queries.
3. Run the schema file in MySQL Workbench to create the database.
4. Modify `config.json` file with database name and password (for development).
5. Create a basic model
6. Update the server by requiring db, and syncing before server start.

## Deploy Steps

1. Run `heroku create`
2. Provision JawsDB on Heroku
3. Change config.json for production to use an environment variable (provided by JawsDB on Heroku)

```javascript
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
```

## Allow Insecure Prototype Access for Handlebars

Handlebars restricts access to objects that come directly from the database. To get around this, we must allow insecure prototype access.

1. Run `npm install handlebars @handlebars/allow-prototype-access`
2. Require the two new packages.
3. Update the app.engine as follows:

```javascript
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
```

## Expand Views and API Routes

## TODOS:

- POST Routes for models OR Seed Data
- Create a view that accepts data from the database.
- Abstract routes into separate controllers


## CRUD

### POST
- Form
- Form Fields
- View from Handlebars
- View route to serve up the form
- jQuery implementation to send data
- Already have the post route
- Something needs to happen after we successfully create a new player. 
