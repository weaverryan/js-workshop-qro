# JavaScript Training App!

Hi amigos! This repository holds a Symfony application
and Docker setup, which will help us play with JavaScript
and other trendy stuff during our training!

## Setup!

### 1) Get this code!

Use whatever `git` tool you like to clone this repository to your
local machine.

### 2) Start Docker

**NOTE**: If you prefer to *not* use Docker, that's ok! See
[no-docker-setup.md](no-docker-setup.md) for details.

To get the application running, first start the Docker containers. From
inside this directory, run:

```
docker-compose up -d
```

> If you get any "port is already allocated" errors, you may already
> have another Docker project running that is trying to share ports
> to your local machine. Try shutting those down. If that doesn't help,
> let me know!

### 3) Initializing the Database

Next, "bash" into the `web` container. We'll be running *all* of our
commands from inside this container:

```
docker-compose exec web bash
```

This will take you to the working directory, which is `/var/www`.

Finally, download the Composer dependencies and get the database
set up by running (from inside the `web` container):

```
composer install
./bin/console doctrine:database:create
./bin/console doctrine:migrations:migrate --no-interaction
./bin/console doctrine:fixtures:load --no-interaction
```

### 4) Accessing the Site!

That's it! Port `8089` is exposed via docker, so you should now be able
to access the site by going to:

http://127.0.0.1:8089/

If you can see the "Cauldron Overflow" app, then you're ready!

Optionally, you can add the following to your "hosts" file if you
want to access the site via http://javascript.local.com:8089/:

```
127.0.0.1 javascript.local.com
```

### 5) Make sure you have "node" and "yarn" installed

Since you're not using Docker, make sure you have `node` and `yarn`
installed and that you can run:

```
node -v
yarn -v
```
