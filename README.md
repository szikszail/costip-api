# costip-api

The following codes are example to demostrate API testing, including Load testing.

## API testing

For API testing, we are using [Postman](https://www.getpostman.com/). The portable version of it can be downloaded here: [postman-portable](https://portapps.github.io/app/postman-portable/).

### Prepare

1. Install Postman or Postman portable

### Tasks

Based on the [api-automation-webinar](https://github.com/szikszail/api-automation-webinar) create API tests in Postman for [JSON Placeholder](https://jsonplaceholder.typicode.com/).

| N | Method | URL | Parameters | Expected |
|:-:|:------:|:----|:-----------|:---------|
| 1 | `POST` | `/posts` | Body: `{"title": "Test post", "body": "This is a nice post", "userId": 1}` | Code: 200; Response contains `id` |
| 2 | `GET` | `/posts/{id}` | Path: `id` is the ID of the previously added post | Code: 200; Response contains `title`, `body`, `id` and `userId` or previously added post |
| 3 | `POST` | `/posts` | Body: `{"id": {id}, "title": "Test post", "body": "This is a nice post", "userId": 1}` where `id` is the ID of the previously added post | Code: 500 |

## Load testing

For Load testing, we are using [NodeJS](https://nodejs.org/en/) and the [loadtest](https://www.npmjs.com/package/loadtest) tool.

### Prepare

1. Install [NodeJS LTS](https://nodejs.org/en/download/) or [NodeJS Portable](https://github.com/crazy-max/nodejs-portable)
1. Install **loadtest** package:
   ```bash
   npm install -g loadtest
   ```
1. Download this project (either clone or by ZIP)
1. Start example server (in the directory of the downloaded project)
   ```bash
   npm install
   npm start
   ```

### Tasks

1. Start simple load test 
   * on `GET http://localhost:3456/load` 
   * with 10 concurrent users
   * with 10 requests per second
   * send 500 requests

   ```bash
   loadtest http://localhost:3456/load -c 10 --rps 10 -n 500
   ```
   
1. Start other load test 
   * on `GET http://localhost:3456/huge` 
   * with 10 concurrent users
   * with 10 requests per second
   * send 500 requests

   ```bash
   loadtest http://localhost:3456/huge -c 10 --rps 10 -n 500
   ```