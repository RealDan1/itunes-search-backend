# iTunes Search Application

## Description

This is a web app that lets users search for media on the iTunes Store. Users can search for any media including Music, Ebooks, Movies,Podcasts,Audiobooks, Software etc. and the app will return all results from the itunes store using the itunes search api. It is a full-stack project showcasing React on the front end and a secure Node.js backend. The app is designed to be both user-friendly and secure, making it a great example of a modern, professional-grade web application.

## Purpose

The app demonstrates how to:

-   Secure API requests using JWT (JSON Web Tokens).
-   Build a responsive and interactive React front end for searching and managing data.
-   Handle user interactions, state management, and dynamic data rendering effectively.

## Key Features

-   **Search Functionality:** Users can search the iTunes Store for music, movies, podcasts, and more by entering a search term and selecting a media type.
-   **Secure Requests:** The backend uses JWT to secure API requests after the first search, ensuring a safe user experience.
-   **Favorites:** Users can save their favorite items, view them on a dedicated page, and remove them as needed.
-   **Interactive UI:** The React front end dynamically displays search results and updates the favorites list in real-time.
-   **Responsive Design:** The app works well on both desktop and mobile devices, with a clean and modern interface.

---

## How to Install:

### Requirements

-   [Node.js](https://nodejs.org/)
-   npm (comes with Node.js)

### Steps

1. Set up the backend:
    - Go to the backend folder:
        ```bash
        cd backend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Start the backend server:
        ```bash
        npm start
        ```
2. Set up the frontend:
    - Go to the frontend folder:
        ```bash
        cd frontend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Start the frontend app:
        ```bash
        npm start
        ```
3. Open `http://localhost:3000/` in your browser.

---

## Technologies Used

-   **Backend:**
    -   Node.js
    -   Express.js
    -   JWT for secure API authorization
    -       Axios for external API calls
-   **Frontend:**
    -   React.js
    -   Axios for API calls
-   **Styling:**
    -   Custom CSS

---

## Why This Project Stands Out

-   **Portfolio:** The app is a demonstration of my web development skills, showcasing external API calls, dynamic web design, jwt authorisation and securing apis, as well as RESTful Api design.
-   **Reusable Code:** The JWT middleware and secure API flow are modular and can be adapted for other applications.
-   **Clean, Scalable Design:** The app uses best practices in React for state and component management, making it easy to extend.
-   **Other projects::** If you are interested, have a look at my other projects showcasing use of a more advanced React.js project - shop design of a eCommerce website (ReactMart), my toDoList with advanced JWT user authorisation using React.js/Express.js, or my car dataBase with MongoDb and React.js/Express.js.
