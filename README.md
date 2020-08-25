# Backend
This is the API documentation for the Replate application.  


BASE URL: https://bh-replate-1.herokuapp.com/

| Method | URL                  | Description                                                                                            |
| ------ | --------------       | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/auth/register   | Registers a new user.  Requires a JSON object with an "email" and "password" string.                   |
| POST   | /api/auth/login      | Logs in a user.  Requires a JSON object with an "email" and "password" string.                         |
| GET    | /api/users/          | Returns                                                        |
| GET    | /api/users/:id       | Removes the user with the specified `id` and returns the deleted user.                                 |
| PUT    | /api/users/:id       | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |

Login, Register, GetById

/api/users
/api/users/:id
PUT : /api/users/:id