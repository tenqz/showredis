FROM php:7.4-fpm

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
WORKDIR "/var/www"

CMD ["php-fpm"]
