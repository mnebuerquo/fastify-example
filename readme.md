# Project Template

This project can be cloned and modified to use as a starting point for building
an API. Delete your `.git` directory and then `git init` to make it your own.

# Dockerized

Use the local node, npm, and npx scripts. These wrap a docker container version
of the actual tools.

```bash
./npm i
./node script.js
./npx tslint
```

*TODO*: The `./node` script in this project defaults to calling `docker run` with
a mapped port. If you want to run tests and dev at the same time, this will
fail because it can not bind the same port again. This would be better served
with docker-compose, so the `./node` script would not need to bind the port.
Running dev and test:watch would be done with docker-compose which would handle
ports for you.

# API Framework (Fastify)

[See framework documentation.](https://www.fastify.io/)

This project template includes a hello-world route.

# Swagger

[Github for fastify-swagger](https://github.com/fastify/fastify-swagger)

View the swagger doc for your API at:
[http://localhost:8080/swagger/index.html](http://localhost:8080/swagger/index.html)

# Run the App

Uses typescript and ts-node to run the app.

```bash
./npm run dev
```

# Test (Jest)

Unit tests (not integration) for modules in the project. Integration tests
should be done in a separate script. Unit tests need to not use any network
calls or database calls. Only test input/output of small units of this project.

```bash
npm test
```

```bash
npm test --watchAll
```

# Auto-format Code (Prettier)

Ensure code is formatted cleanly before committing. This keeps it looking neat
and is required for commits. This keeps your code clean by removing all those 
unnecessary semicolons.

```bash
./npm run pretty
```

# TSlint

Ensure code is free of bad practice patterns. Use best practices for
tyepscript and ES6.

```bash
./npm run lint
```
# Git Hooks

This project installs a git hook for pre-commit, which happens when you run
`./npm i`. It uses docker to run the `precommit` npm script in `package.json`.

To run your own pre-commit script, add a script in the project and invoke it
using the `precommit` script in `package.json`.

# Deploying

_TBD_
