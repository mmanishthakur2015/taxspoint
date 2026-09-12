FROM php:8.2-apache

# Install standard PHP extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Enable Apache mod_rewrite for CodeIgniter clean routing
RUN a2enmod rewrite

# Set AllowOverride All for .htaccess
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# Set working directory & copy files
WORKDIR /var/www/html
COPY . /var/www/html/

# Permissions
RUN chown -R www-data:www-data /var/www/html

# Render sets PORT environment variable (default 80 or 10000)
ENV PORT 80
EXPOSE 80 10000

# Script to bind Apache to Render's dynamic PORT
CMD sed -i "s/80/$PORT/g" /etc/apache2/ports.conf /etc/apache2/sites-available/*.conf && apache2-foreground
