FROM php:7.4-fpm

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
WORKDIR "/var/www"

RUN pecl install redis-5.1.1 \
    && pecl install xdebug-2.8.1 \
    && docker-php-ext-enable redis xdebug

CMD ["php-fpm"]
