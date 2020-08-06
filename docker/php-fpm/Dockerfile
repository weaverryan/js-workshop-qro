FROM php:7.4-fpm-alpine

RUN apk --update --no-cache add git
RUN apk --update --no-cache add icu-libs
RUN apk --update --no-cache add icu-dev

RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-configure intl
RUN docker-php-ext-install intl
RUN docker-php-ext-install opcache

COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
CMD ["php-fpm"]
EXPOSE 9000
