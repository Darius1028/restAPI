# API node

RESTful API based.

## Features

- Create, update, delete, List => USER
- Create, update, delete, List => COMPANY

## API response

### User
- GET /api/users => list User
- GET /api/users/:id => One User
- POST /api/users => Create User
- PUT /api/users => Update User
- Delete /api/users => Delete User

### Company
- GET /api/companies => list Company
- GET /api/companies/:id => One Company
- POST /api/companies => Create Company
- PUT /api/companies => Update Company
- Delete /api/companies => Delete Company

**Objects User**

```json
{
    "_id": "637302674ccc4a59b0d2eae5",
    "phone": "1703453478",
    "isActive": true,
    "firstName": "John TWO",
    "lastName": "Doe",
    "createdAt": "2022-11-15T03:07:19.633Z",
    "updatedAt": "2022-11-15T03:07:19.633Z"
}
```

**Objects Company**

```json
{
    "name": "Company F",
    "isActive": true,
    "address": "Av six and four",
    "logo": "https://s3.amazonaws.com/f7-test-uploads/1568752422508.jpg"
}
```

### Setup environment

- Configure the following env variables:

    ```
    MONGODB_URL=mongodb://localhost:27020/mydb
    PORT=3000
    ```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

