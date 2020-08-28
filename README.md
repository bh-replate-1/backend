# Backend
This is the API documentation for the Replate application.  

BASE URL: https://bh-replate-1.herokuapp.com/


CURRENT AUTH ENDPOINTS

| Method | URL                  | Description                                                                                            |
| ------ | --------------       | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/auth/register   | Registers a new user.  Requires a JSON object with an "email" and "password" string.                   |
| POST   | /api/auth/login      | Logs in a user.  Requires a JSON object with an "email" and "password" string.                         |


CURRENT USERS ENDPOINTS

| Method | URL                  | Description                                                                                            |
| ------ | --------------       | ------------------------------------------------------------------------------------------------------ |
| GET    | /api/users/          | Returns an array of all Users.  User information is in JSON format.                                    |
| GET    | /api/users/:id       | Selects a user by id.  Returns User information in JSON format.                                        |
| PUT    | /api/users/:id       | Updates the user with the specified id using data from the request body. Returns the modified user.    |
| DELETE | /api/users/:id/      | Deletes the selected user's information.                                                               |


CURRENT FOOD ENDPOINTS

| Method | URL                  | Description                                                                                            |
| ------ | --------------       | ------------------------------------------------------------------------------------------------------ |
| GET    | /api/food/           | Returns an array of different food objects (JSON).                                                     |
| GET    | /api/food/:id        | Returns the specified food in JSON format.                                                             |
| POST   | /api/food            | Insert a food object to the database.  Requires properties food_item and use_by_date.                  |
| PUT    | /api/food/:id        | Update the selected food item.  Requires properties food_item and use_by_date.                         |
| DELETE | /api/food/:id        | Deletes the selected food object.
                                                                                                                                                                                                                                                                                                   
Example:  GetUserById

GET(https://bh-replate-1.herokuapp.com/api/users/1) -->

{
    "id": 1,
    "name": "John Doe",
    "email": "JohnDoe@gmail.com",
    "address": "JohnDoeVille",
    "phone": "999-867-5309",
    "company": "Replate"
}




User Object Format -->

{
    "id": 1,
    "name": "John Doe",
    "email": "JohnDoe@gmail.com",
    "address": "JohnDoeVille",
    "phone": "999-867-5309",
    "company": "Replate"
}


Food Object Format -->

{
    "id": 1,
    "food_item": "Steak",
    "quantity": 1,
    "use_by_date": "8/30/20",
    "refrigerate": 1,
    "completed": 0,
    "user_id": null
}