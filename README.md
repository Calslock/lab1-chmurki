# Lab1-chmurki
Web app showing times for different timezones. Image based on [nimmis/alpine-apache](https://hub.docker.com/r/nimmis/alpine-apache). Uses luxon.js library and jQuery.

# Building image
Pull repository and run `docker build -t calslock/lab1-chmurki .` in repo main directory.

# Running image
`docker run -d -p your_port:80 --name your_name calslock/lab-chmurki`

# Running app
App is available on `localhost:your_port`

# Additional information
**Only after initial build** - At first time Apache loads configuration files from alpine-apache image - for this reason app will is available under `localhost` after few minutes after initial docker run.
