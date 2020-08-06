# JavaScript Training App!

Hi amigos! This repository holds a Symfony application
and Docker setup, which will help us play with JavaScript
and other trendy stuff during our training!

## Setup!

To get the application running, first start the Docker containers:

```
docker-compose up -d
``` 

Next, "sh" into the `php-fpm` container. We'll be running *all* of our
commands from inside this container:

```
docker-compose exec php-fpm sh
```

Finally, get the database setup by running:

```
./bin/console doctrine:database:create
./bin/console doctrine:migrations:migrate --no-interaction
./bin/console doctrine:fixtures:load --no-interaction
```

That's it! You should now be able to access the site by going to:

http://127.0.0.1:8080/

If you can see the "Cauldron Overflow" app, then you're ready!
