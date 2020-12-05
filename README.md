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

## Expand Views and API Routes

