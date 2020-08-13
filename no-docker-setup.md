# Setting up without Docker

If you'd prefer not to use Docker, that's ok! Here is what you need to do:

### 0) Get PHP 7.2 or higher

This project requires PHP 7.2 or higher!

### 1) Get this code!

Use whatever `git` tool you like to clone this repository to your
local machine.

### 2) Install Composer dependencies

Run:

```
composer install
```

### 3) Database Setup

Make sure you have MySQL running.

Now, configure the `.env` file: change `DATABASE_URL` to have the
correct username & password.

If you're using MySQL 5, you will also need to open
`config/packages/doctrine.yaml` and change `server_version` from `8.0`
to your version - e.g. `5.7.`.

Now, create your database by running:

```
./bin/console doctrine:database:create
./bin/console doctrine:migrations:migrate --no-interaction
./bin/console doctrine:fixtures:load --no-interaction
```

### 4) Start the web server

You can use Nginx or Apache if you want. However, I recommend using the
built-in PHP web server:

```
php -S localhost:8089 -t web
```

You should now be able to see the site at http://localhost:8089

Have fun!
