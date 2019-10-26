![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/Storage-Amazon%20Web%20Service-informational.svg)

# Landy API

<p align="center">
    <img title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

---

Related Project: [React-Native Implementation](https://github.com/arkademy-maxwell/Landy-Mobile-FRONTEND)

---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisite](#prerequisite)
- [Installation](#installation)
  - [Clone](#clone)
  - [Environment](#environment)
  - [Start](#start)
- [Dependencies](#dependencies)
- [Features](#features)
- [Routes](#api-docs)

---

## Introduction

Landy is a travel app with a variety of the best budget hotels throughout Indonesia. Supported by the latest technology, we provide the best stay experience at an affordable price.

---

## Prerequisite

- [Node.js](https://nodejs.org/en/) (JAVASCRIPT RUNTIME)
- [Express](https://www.npmjs.com/package/express) (REST API)
- [MySQL](https://www.npmjs.com/package/mysql) (DATABASE)
- [JWT](https://www.npmjs.com/package/jsonwebtoken) (AUTHENTICATION TOKEN)
- [NEXTMO](https://www.nexmo.com/) (SMS VERIFICATION)
- [Postman](https://www.getpostman.com/) (TESTING REQUEST)

---

## Installation

### Clone

```bash
$ git clone https://github.com/arkademy-maxwell/Landy-Express-API.git
$ cd Landy-Express-API
$ npm install
```

---

### Create Environment Variables

```bash
$ mv .env.example .env
$ [your text editor] .env
```

---

### Start

```bash
$ npm start
```

---

## Other Dependencies

- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express Fileupload](https://www.npmjs.com/package/express-fileupload)
- [Fs](https://www.npmjs.com/package/fs)
- [Joi](https://www.npmjs.com/package/@hapi/joi)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Nodemon](https://www.npmjs.com/package/nodemon)

---

## Features

- Get ALL room/flight
- Book Ticket room/flight
- Search, sort
- Increase quantity
- Reduce quantity
- Register user
- Login user with JWT
- Forget password

---

## API Routes

Postman Collection: https://documenter.getpostman.com/view/8872083/SVzxZzoq