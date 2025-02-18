# Shopping List App with Redux

## Overview

This is a **Shopping List App** built using **React** and **Redux** for state management. The application allows users to manage their shopping list by adding, editing, and deleting items. Additionally, it provides features for marking items as purchased, persists data between app sessions using a **Node.js server with a PostgreSQL database** hosted on **Render**, and includes accessibility features for all users.

## Features

- Add new items to the shopping list.
- Edit the name or quantity of existing items.
- Delete items from the list.
- Mark items as purchased.
- Visual feedback when actions are completed.
- Data persistence using **Node.js** and **PostgreSQL** with **Render**.
- Accessibility features for screen readers.

## Requirements

- Node.js (for the backend server)
- React (for the frontend)
- Redux (for state management)
- PostgreSQL (for storing shopping list data)
- Render (for hosting the backend)

## Technologies Used

- **Frontend:**
  - React Native (via Expo)
  - Redux
  - Axios (for API calls)
  
- **Backend:**
  - Node.js
  - Express.js
  - PostgreSQL
  - Sequelize (for ORM)

- **Persistence:**
  - Data is stored in a PostgreSQL database, and the data is persisted using the backend (hosted on Render).

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/DeLightPlus/React-Native-Lesson-6-ShoppingList-Redux.git
cd shopping-list-app
```

### 2. Install dependencies for the frontend 
- make sure you're in the main branch

```bash
npm install
```

### 3. Running the application
**Running the frontend (Expo React Native app)**
To run the **Expo React Native** app, use the following command:

```bash
npx expo start
```

This will start the app and open it in the Expo app or a simulator.

### Redux Setup
**Actions**
- ✅ Add Item: Adds a new item to the shopping list.
- ❌ Edit Item: Edits the name or quantity of an existing item.
- ✅ Delete Item: Deletes an item from the list.
- ❌ Mark as Purchased: Marks an item as purchased.

**Reducers**
Reducers are created to handle each of the actions and update the Redux store accordingly.

**Store**
The Redux store is configured to manage the state of the shopping list, including the list of items, the user's interactions, and their feedback.

**Persistence**
We use a **Node.js server with PostgreSQL** for data persistence. The shopping list data is stored in a PostgreSQL database hosted on **Render**.

**API Endpoints**
The backend provides the following API endpoints for CRUD operations on the shopping list:
- **GET /items**: Fetch all shopping list items.
- **POST /items**: Add a new item to the list.
- **PUT /items/:id**: Edit an existing item.
- **DELETE /items/:id**: Delete an item from the list.

**Deployment**
1. **Frontend Deployment:** The React Native app is deployed using **Expo**. You can either use **Expo Go** on your mobile device or run it on an emulator.
2. **Backend Deployment:** The backend is deployed to **Render**. Ensure that the PostgreSQL database is connected correctly in the .env file.