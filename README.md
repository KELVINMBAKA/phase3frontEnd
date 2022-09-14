# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all of the project's dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


THE LINK TO BACKEND CODE .
"https://github.com/KELVINMBAKA/Moringa-Backend"

### Project Plan

### MVP

 Clients and Services, joined by Reservations:
- Clients
    -  First Name
    -  Last Name
    -  Email
    -  Class count (Stretch)
- Services
    - Name
    - Description
    - Date/Time
- Reservations
    - client_id
    - service_id

### CRUD actions:

The admin can:
- Add new services (CREATE/POST)
- Update existing services (UPDATE/PATCH)
- Make service reservations for clients (CREATE/POST)
- Add clients (CREATE/POST)
- Edit existing clients (UPDATE/PATCH)
- Cancel reservations (DELETE)
- Delete existing clients (DELETE)
- View all reservations for each service (READ/GET)

### Home page

- Class view - can toggle to clients - Date, time, class name, instructor, people enrolled, edit button
- Form to add a new class
- Client view - can toggle to classes - First name, last name, email, number of classes taken, edit button
- Form to add a new client
- If you click on a class, you’ll see the people enrolled
- Cancellations - click on an “cancel” next to the client name
- If you click on a client, you can see their details
- Cancellation - click on an “X” next to the class name