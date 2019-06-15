#!/bin/sh

set -a
# set env vars here so they're set for docker
PORT=8080
echo "Set default PORT to ${PORT}."
# define any env in .env, it's optional
if [ -f ./.env ]; then
	. ./.env
	echo "Loaded environment vars from .env file."
else
	echo "You may create a .env file to define environment variables."
fi
set +a

./npm run dev
