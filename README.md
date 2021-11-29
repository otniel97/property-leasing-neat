## API PROPERTY-LEASING-NEAT

API backend server for property-leasing-neat

### Required software to install
- Node.js > 12.9
- Postgres


### How to start
```
$ config .env file
$ npm install
$ npm run dev


## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
PORT = 3000
NODE_ENV = development
EXPIRATION_DATE = 1000000h
SEED = secret-dev
CLIENT_CORS_URL = http://localhost:8080
```

## Project Structure

```
public\
 |--images\         # Images directory
 |--docs\           # Docs directory
src\
 |--config  \       # config credentials and enviroments
 |--controllers\    # Route controllers
 |--docs\           # Swagger documentation
 |--jobs\           # Jobs Functions
 |--middlewares\    # Middlewares
 |--migrations\     # Migrations
 |--models\         # Database models
 |--routes\         # Routes
 |--seeders\        # Seeds database data
 |--server\         # server
 |--services\       # APP services
 |--utils\          # util functions for app services
 |--app.js          # Run app
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000` in your browser.
Swagger API Documentation in `http://localhost:3000/api/v1/docs`

## API Documentation Production Heroku
To view the list of available APIs and their specifications, go to `https://property-leasing-neat.herokuapp.com/` in your browser.
Swagger API Documentation in `https://property-leasing-neat.herokuapp.com//api/v1/docs`

## Steps to upload changes to Heroku server
Commit and push to develop branch
From terminal do the command, heroku login, enter credentials in heroku
When you have the heroku session in the terminal, run the command: git push heroku develop:main
Wait for the changes to be uploaded