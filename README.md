# Backend
This is the API documentation for the Replate application.  

BASE URL: https://bh-replate-1.herokuapp.com/


CURRENT AUTH ENDPOINTS

| Method | URL                  | Description                                                                                            |
| ------ | --------------       | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/auth/register   | Registers a new user.  Requires a JSON object with an "email" and "password" string.                   |
| POST   | /api/auth/login      | Logs in a user.  Requires a JSON object with an "email" and "password" string.                         |

CURRENT USERS ENDPOINTS

| GET    | /api/users/          | Returns an array of all Users.  User information is in JSON format.                                    |
| GET    | /api/users/:id       | Selects a user by id.  Returns User information in JSON format.                                        |
| PUT    | /api/users/:id       | Updates the user with the specified id using data from the request body. Returns the modified user     |
| POST   | /api/users/:id/food  | Inserts a JSON object.  Requires food_item, use_by_date, and user_id.  Returns specified user's information

CURRENT FOOD ENDPOINTS                                                                 
| GET    | /api/food/           | Returns an array of different food objects (JSON).                                                     |
| GET    | /api/food/:id        | Returns the specified food in JSON format.                                                             |
| PUT    | /api/food/:id        | Updates the food with the specified id using data from the request body. Returns the modified food object|



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

