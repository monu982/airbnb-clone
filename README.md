[demo]: https://img.shields.io/badge/🚀%20Live%20Demo-000000?style=for-the-badge&&logoColor=white&color=0a6bdb
[demo-link]: https://airbnb-clone-fgly.onrender.com/
[status]: https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwrujel%2Fmonitor-repos%2Fmain%2Fdata%2Fairbnb-clone.json
[deploy]: https://img.shields.io/github/deployments/wrujel/airbnb-clone/production?style=for-the-badge&label=Deploy
[tests]: https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwrujel%2Fmonitor-tests%2Fmain%2Fdata%2Fairbnb-clone.json

<div align='center'>

[![demo][demo]][demo-link]
[![status][status]](/)
[![deploy][deploy]](/)
[![test][tests]](/)

</div>

<div align='center'>
  <a href='/'>
    <img
      src='/assets/Screenshot.png'
      alt='Screenshot of the app'
    />
  </a>
</div>

<div align="center">
  <h1>Airbnb Clone</h1>
</div>

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)  
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[![Bootstrap CSS](https://img.shields.io/badge/Bootstrap-CB48D7?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)  
[![Cloudinary](https://img.shields.io/badge/Cloudinary-0A3A91?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)  
[![Connect Flash](https://img.shields.io/badge/Connect--Flash-6F7E60?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/connect-flash)  
[![Connect Mongo](https://img.shields.io/badge/Connect--Mongo-4C4C4C?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/connect-mongo)  
[![Cookie Parser](https://img.shields.io/badge/Cookie--Parser-6D4F39?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/cookie-parser)  
[![dotenv](https://img.shields.io/badge/dotenv-5A8F3E?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/dotenv)  
[![EJS](https://img.shields.io/badge/EJS-9E593A?style=for-the-badge&logo=ejs&logoColor=white)](https://www.npmjs.com/package/ejs)  
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)  
[![Express Session](https://img.shields.io/badge/Express--Session-45B8A2?style=for-the-badge&logo=express&logoColor=white)](https://www.npmjs.com/package/express-session)  
[![Joi](https://img.shields.io/badge/Joi-9B5DE5?style=for-the-badge&logo=joi&logoColor=white)](https://www.npmjs.com/package/joi)  
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)  
[![Multer](https://img.shields.io/badge/Multer-2A6EBB?style=for-the-badge&logo=multer&logoColor=white)](https://www.npmjs.com/package/multer)  
[![Multer Storage Cloudinary](https://img.shields.io/badge/Multer--Storage--Cloudinary-FFF?style=for-the-badge&logo=cloudinary&logoColor=white)](https://www.npmjs.com/package/multer-storage-cloudinary)  
[![Passport](https://img.shields.io/badge/Passport-1E1F26?style=for-the-badge&logo=npm&logoColor=white)](http://www.passportjs.org/)  
[![Passport Local Mongoose](https://img.shields.io/badge/Passport--Local--Mongoose-68A0C5?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/passport-local-mongoose)  
[![Query String](https://img.shields.io/badge/Query--String-3A5A40?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/query-string)  
[![World Countries Data](https://img.shields.io/badge/World--Countries--Data-009639?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/world-countries-data)  
[![Render](https://img.shields.io/badge/Render-05A6D3?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

</div>

<div align='center'>
  This is a web application built using Node.js that mimics key features of the Airbnb platform. The app allows users to perform various operations such as making reservations, logging in via email, listing properties, and leaving reviews.

[Demo](https://airbnb-clone-fgly.onrender.com/) · [Report issue](/issues) · [Suggest something](/issues)

</div>

### Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Learn More](#learn-more)
- [Deploy on Render](#deploy-on-render)
- [Demo](#demo)

### Features

[x] **Responsive Design**: Built using **Bootstrap CSS** to ensure compatibility across devices.

- [x] **Property Listings**: Display a list of cards with properties, similar to Airbnb, including:
  - [x] **Images**
  - [x] **Title**
  - [x] **Description**
  - [x] **Location**
  - [x] **Price per night**
- [x] **Navbar**: Includes:
  - [x] Logo
  - [x] Search bar
  - [x] Sign-in button
- [x] **User Information**: Display the name of the user who uploaded each property.
- [x] **Map Integration**: Map with markers for each property location.
- [x] **Property Form**: Form to add new properties, including:
  - [x] **Images** (uploaded via Cloudinary)
  - [x] **Property details** (Title, Description, Location, Price)
- [x] **User Authentication**: Secure sign-up and sign-in forms with email authentication.
- [x] **Reservation Page**: Page to show the reservations for each property.
- [x] **Database**: Uses **MongoDB** to store user and property data.
- [x] **App Router**: Utilizes **Node.js** App Router for routing.
- [x] **Cloudinary Integration**: For image uploads of property listings.
- [x] **Review System**: Users can leave reviews for properties they have booked.
- [x] **Deployment**: Hosted on **Render** for easy access and deployment.

### Tech Stack

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Bootstrap CSS](https://getbootstrap.com/)
- [MongoDB](https://www.mongodb.com/)
- [Axios](https://axios-http.com/)
- [Cloudinary](https://cloudinary.com/)
- [Connect Flash](https://www.npmjs.com/package/connect-flash)
- [Connect Mongo](https://www.npmjs.com/package/connect-mongo)
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [EJS](https://www.npmjs.com/package/ejs)
- [Express](https://expressjs.com/)
- [Express Session](https://www.npmjs.com/package/express-session)
- [Joi](https://www.npmjs.com/package/joi)
- [Mongoose](https://mongoosejs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Multer Storage Cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)
- [Passport](http://www.passportjs.org/)
- [Passport Local Mongoose](https://www.npmjs.com/package/passport-local-mongoose)
- [Query String](https://www.npmjs.com/package/query-string)
- [World Countries Data](https://www.npmjs.com/package/world-countries-data)
- [Render](https://render.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/)

### Getting Started:

1. Clone the repository:  
   `git clone https://github.com/your-username/airbnb-clone.git`

2. Navigate to the project directory:  
   `cd airbnb-clone`

3. Install dependencies:  
   `npm install`

4. Create a `.env` file and set up the necessary environment variables (e.g., MongoDB URI, Cloudinary credentials).

5. Start the server:  
   `npm start`

6. Open your browser and navigate to `http://localhost:3000`.

### Learn More

To learn more about Node.js, take a look at the following resources:

- [Node.js Documentation](https://nodejs.org/en/docs/) - learn about Node.js features and API.
- [Learn Node.js](https://nodejs.dev/) - an interactive Node.js tutorial.

You can check out [the Node.js GitHub repository](https://github.com/nodejs/node) - your feedback and contributions are welcome!

## Deploy on Render

The easiest way to deploy your Node.js app is to use the [Render Platform](https://render.com/).

Check out our [Node.js deployment documentation](https://render.com/docs/deploy-node-app) for more details.

## Demo

You can check out the demo:

[![demo][demo]][demo-link]
