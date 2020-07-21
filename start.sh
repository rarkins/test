#!/bin/bash

#docker run --rm -v "$(pwd)/config.js:/usr/src/app/config.js" renovate/renovate

docker run --rm -v "`pwd -W`/config.js":"/usr/src/app/config.js" renovate/renovate

read -p "$*"