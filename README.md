# Project 1: Shared shopping list

# Course project I

This is Shared shopping list - the course project I

## Contents

The course project I has a simple Deno application that starts on port `7777`.

The main page will respond to queries with a page which contains h1 `Lists`, "Shopping list: ", and "Shopping list items: ". 
"Shopping list: " is used to display the number of shopping lists
"Shopping list items: " is used to display the number of shopping list items

"/lists" will respond to queries with a page which contains h1 `Shopping lists`, a form to add new shopping list, and a list of active lists.
Click on individual list will redirect to path /lists/list.id
Click on "Main page" will redirect to main page

"/lists/list.id" will respond to queries with a page which contains name of the list , a form to add new item, and a list of items.
Click on "Mark collected!" will create a line go through an item to indicate that it is collected. 
Click on "Shopping lists" will redirect to path /lists

Launching the course project I starts the Deno application, a PostgreSQL server,
and a database migration process (Flyway).

## Starting and shutting down

The course project I is used with Docker Compose.

- To start the course project I, open up the terminal in the folder that
  contains the `docker-compose.yml` file and type `docker compose up --build`.
- To stop the course project I, press `ctrl+C` (or similar) in the same terminal
  where you wrote the command `docker compose up`. Another option is to open up
  a new terminal and navigate to the folder that contains the
  `docker-compose.yml` file, and then write `docker compose stop`.

## Watching for changes

The course project I by default watches for changes in the Deno code and
restarts the application whenever needed. 

## Database

When the course project I is up and running, you can access the PostgreSQL
database from the terminal using the following command:

```
docker exec -it database-p1-4f39a9d5-9b37-4b13-b7d4-5693677e9d48 psql -U username database
```

This opens up `psql` console, where you can write SQL commands.

## Database migrations

When the Shared shopping list is started, Flyway is used to run the SQL commands in
the database migration files that reside in the `flyway/sql`-folder. If a
database exists, Flyway checks that the schema corresponds to the contents of
the database migration files.

If you need new database tables or need to alter the schema, the correct
approach is to create a new migration file and start the Shared shopping list.
Another approach is to modify the existing migration file -- if you do this, the
migrations fail, however.

If you end up altering the migration files (or the schema in the database), you
can clean up the database (remove the existing database tables) by stopping the
containers and the related volumes -- with the database data -- with the command
`docker compose down`. When you launch the Shared shopping list again after this,
the database is newly created based on the migration files.

## Deno cache

When we launch a Deno application, Deno loads any dependencies that the
application uses. These dependencies are then stored to the local file system
for future use. The Shared shopping list uses the `app-cache`-folder for storing the
dependencies. If you need to clear the cache, empty the contents of the folder.

## The project.env file

Database and Deno cache configurations are entered in the `project.env` file,
which Docker uses when starting the Shared shopping list. 

## E2E Tests with playwright

The Shared shopping list comes also with 5 tests to check its functions.

To run E2E tests, launch the project using the following command:

```
docker rm $(docker ps -a -q)
docker rmi e2e-playwright
docker compose run --entrypoint=npx e2e-playwright playwright test && docker compose rm -sf
```

## Location of online website

https://wsd-course-project-1-4uaq.onrender.com


