FROM nimmis/alpine-apache
COPY src/ /web/html
EXPOSE 80
