# merchandise-management
this is  a project for pratice backend crud.

## Install dependecies
 - yarn install

## Start development server
  - yarn dev

## Create build
 - yarn build

## Start production server
  For start server production, your he must do install dependecies and dobuild the application. 
  - yarn start

# MERCHANDISE ROUTER API
## Endpoints
### GET /merchandises
This endpoint return all merchandises registred in database.
### PARAMETERS
- not have params
### RESPONSE
- status: 200
  ```json [
      {
        "id": 1,
        "name_merchandise": "Product 1",
        "photo_merchandise": "url",
        "state_merchandise": "true | false",
        "price_merchandise": "100.00",
        "quantity_stock_merchandise": "10",
        "ClassificationId": 6,
        "created_at": "2020-05-05T00:00:00.000Z",
        "updated_at": "2020-05-05T00:00:00.000Z",
        "Classification": {
          "id": 6,
          "name_classification": "Name Classification id 6",
          "photo_classification": "url",
          "createdAt": "2021-10-21T20:21:26.000Z",
          "updatedAt": "2021-10-21T20:21:26.000Z"
        }
      }]
      ```
- status: 404
  ```json {
    "message": "Merchandise id [num] Not found"
  }
  ```
### POST /merchandises
This endpoint create a new merchandise.
### PARAMETERS
not have params
### BODY
- body router merchandise post
```json
{
  "name_merchandise": "Product 1",
  "photo_merchandise": "url",
  "state_merchandise": "true | false",
  "price_merchandise": "100.00",
  "quantity_stock_merchandise": "10",
  "ClassificationId": 6
}
```
### RESPONSE
- status: 200
  ```json
   {
    "message": "merchandise created with success"
  }
  ```
- status: 404
  ```json
   {
    "message": "Classification id [num] Not found"
   }
  ```
- status: 400
  ```json
  {
    "message": "error created at merchandise"
  }
  ```
### GET /merchandises/:id
This endpoint return a merchandise by id.
### PARAMETERS
- id: number
### RESPONSE
- status: 200
  ```json
  {
    "id": 1,
    "name_merchandise": "Product 1",
    "photo_merchandise": "url",
    "state_merchandise": "true | false",
    "price_merchandise": "100.00",
    "quantity_stock_merchandise": "10",
    "ClassificationId": 6,
    "created_at": "2020-05-05T00:00:00.000Z",
    "updated_at": "2020-05-05T00:00:00.000Z",
    "Classification": {
      "id": 6,
      "name_classification": "Name Classification id 6",
      "photo_classification": "url",
      "createdAt": "2021-10-21T20:21:26.000Z",
      "updatedAt": "2021-10-21T20:21:26.000Z"
    }
  }
  ```
### PATCH /merchandises/:id
This endpoint update a merchandise by id.
### PARAMETERS
- id: number
### BODY
- body router merchandise put
- in the router all fields are optional.
```json
{
  "name_merchandise": "Product 1",
  "photo_merchandise": "url",
  "state_merchandise": "true | false",
  "price_merchandise": "100.00",
  "quantity_stock_merchandise": "10",
  "ClassificationId": 6
}
```
### RESPONSE
- status: 200
  ```json
  {
    "message": "merchandise [camp_are_update]updated."
  }
  ```
- status: 404
  ```json
  {
    "message": "merchandise not found"
  }
  ```
- status: 400
  ```json
  {
    "message": "impossible the update merchandise"
  }
  ```
### DELETE /merchandises/:id
This endpoint delete a merchandise by id.
### PARAMETERS
- id: number
### RESPONSE
- status: 200
  ```json
  {
    "message": "merchandise [id] deleted."
  }
  ```
- status: 404
  ```json
  {
    "message": "merchandise id not exists"
  }
  ```
- status: 400
  ```json
  {
    "message": "impossible delete merchandise"
  }
  ```
### PUT /merchandises/:id
This endpoint update a merchandise by id.
### PARAMETERS
- id: number
### BODY
- body router merchandise put
- in the router all fields are mandatory.
```json
{
  "name_merchandise": "Product 1",
  "photo_merchandise": "url",
  "state_merchandise": "true | false",
  "price_merchandise": "100.00",
  "quantity_stock_merchandise": "10",
  "ClassificationId": 6
}
```
### RESPONSE
- status: 200
  ```json
  {
    "message": "merchandise  updated."
  }
  ```
- status: 404
  ```json
  {
    "message": "merchandise not found"
  }
  ```
- status: 400
  ```json
  {
    "message": "impossible the update merchandise"
  }
  ```

# CLASSIFICATIONS ROUTER API
## Endpoints
### GET /classifications
This endpoint return all classifications registred in database.
### PARAMETERS
- not have params
### RESPONSE
- status: 200
  ```json
  [
      {
        "id": 1,
        "name_classification": "Name Classification id 1",
        "photo_classification": "url",
        "createdAt": "2020-05-05T00:00:00.000Z",
        "updatedAt": "2020-05-05T00:00:00.000Z"
      }
  ] 
  ```
- status: 404
  ```json
  {
    "message": "not have classifications."
  }
  ```
- status: 500
  ```json
  {
    "message": "ocurred error in the server"
  }
  ```

### POST /classifications
This endpoint create a new classification.
### PARAMETERS
not have params
### BODY
- body router classification post
```json
{
  "name_classification": "Name Classification id 1",
  "photo_classification": "url"
}
```
### RESPONSE
- status: 200
  ```json
  {
    "message": "classification created".
  }
  ```
- status: 400
  ```json
  {
    "message": "[error he comes try catch]"
  }
  ```
### GET /classifications/:id
This endpoint return a classification by id.
### PARAMETERS
- id: number
### RESPONSE
- status: 200
  ```json
  {
    "id": 1,
    "name_classification": "Name Classification id 1",
    "photo_classification": "url",
    "createdAt": "2020-05-05T00:00:00.000Z",
    "updatedAt": "2020-05-05T00:00:00.000Z"
  }
  ```
- status: 404
  ```json
  {
    "message": "not have a classification with id [id]"
  }
  ```
- status: 400
  ```json
  {
    "message": "impossible to get classification"
  }
  ```
### DELETE /classifications/:id
This endpoint delete a classification by id.
### PARAMETERS
- id: number
### RESPONSE
- status: 200
  ```json
  {
    "message": "classification [id] deleted."
  }
  ```
- status: 404
  ```json
  {
    "message": "classification id not found"
  }
  ```
- status: 400
  ```json
  {
    "message": "[error has some try catch]"
  }
  ```
### PUT  /classifications
This endpoint update a classification by body id.
### PARAMETERS
- not have param
### BODY
- body router classification put
- all filds are mandatory.
```json
{
  "id": 1,
  "name_classification": "Name Classification id 1",
  "photo_classification": "url"
}
```
### RESPONSE
- status: 200
  ```json
  {
    "message": "classification [id] updated."
  }
  ```
- status: 404
  ```json
  {
    "message": "classification id not exists"
  }
  ```
- status: 400
  ```json
  {
    "message": "not updated."
  }
  ```

# USERS ROUTER API
## Endpoints
### POST /users
This endpoint create a new user.
### PARAMETERS
not have params
### BODY
- body router user post
```json
{
  "email": "TEST",
  "password": "123456",
}
```
### RESPONSE 
- status: 200
  ```json
  {
    "message": "user created."
  }
  ```
- status: 400
  ```json
  {
    "message": "[error he comes try catch]"
  }
  ```
- status 409:
  ```json
  {
    "message": "email existed."
  }
  ```
- status 400:
  ```json
  {
    "message": "impossible to create user."
  }
  ```

# AUTH ROUTER API
## Endpoints
### POST /auth
This endpoint return a token by email and password.
### PARAMETERS
not have params
### BODY
- body router auth post
```json
{
  "email": "TEST",
  "password": "123456",
}
```
### RESPONSE
- status 200:
 ```json
 {
   "token_access":  "Bearer [token]"
}
```
- status 400:
  ```json
  {
    "message": "impossible execute the login."
  }
  ```