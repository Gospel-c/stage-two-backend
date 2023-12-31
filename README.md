<h1 align="center">Person REST API</h1>

###

<h2 align="left">❓About</h2>

###

<p align="left">This API was created with Nodejs runtime environment, using Express and mongoDB<br>It performs CRUD operations on a given person name data, the data could be a request body or a query parameter.<br>The mongoose schema has just one field { name: String }.</p>

###

<h2 align="left">🔰How to use</h2>

###

<p align="left">It has four endpoints, for performing CRUD operations. <br><br>➡The POST HTTP verb for adding a person can be accessed using e.g axios.post(${{baseUrl}}/user/api).<br>It also accepts a name query parameter which when provided, adds the data to the database.<br><br>➡The GET HTTP verb for retrieving data or Reading data can be accessed using e.g axios.get(${{baseUrl}}/user/api/:user_id). It finds one document where the user_id parameter matches the _id of that document.<br>It also retrieves data if a name query parameter is provided.<br><br>➡The PATCH HTTP verb for updating part of the data can be accessed using e.g axios.patch(${{baseUrl}}/user/api/:user_id). It finds a document by id and updates the given fields or conditions. If a name query parameter is provided, it finds a document whose name field is the same as the name query parameter, and uses the data from the request body to update it.<br><br>➡The DELETE HTTP verb for deleting or removing a document can be accessed using e.g axios.delete(${{baseUrl}}/user/api/:user_id). it finds and removes a document by the user_id. If a name query parameter is provided, then it find a document that has a name field the the query value and removes it.</p>

###

<h2 align="left">🚩Adding person to Database using Postman</h2>

###

<p align="left">***POST REQUEST [https://stage-two-backend.onrender.com/user/api/]***</p>

###

<div align="center">
  <img height="300" src="https://i.ibb.co/qdBn7tq/Add-Person.png"  />
</div>

###

<h2 align="left">⚡Retrieving person data from Database using Postman</h2>

###

<p align="left">***GET REQUEST [https://stage-two-backend.onrender.com/user/api/:user_id]*** if the user id is passed as a parameter</p>
<p align="left">***GET REQUEST [https://stage-two-backend.onrender.com/user/api/:user_id/?name=Mark Essien]*** if a query parameter is provided the it gets the document that matches that parameter.</p>

###

<div align="center">
  <img height="300" src="https://i.ibb.co/xLq6TwF/get-Person.png"  />
</div>

###

<h2 align="left">❄Updating person data using Postman</h2>

###

<p align="left">***PATCH REQUEST [https://stage-two-backend.onrender.com/user/api/:user_id]*** if the user id is passed as a parameter. The new update data will will provided in the request body.</p>
<p align="left">***GET REQUEST [https://stage-two-backend.onrender.com/user/api/:user_id/?name=Mark Essien]*** The new update data will will provided in the request body</p>

###

<div align="center">
  <img height="300" src="https://i.ibb.co/Jsvr0xX/update-Person.png"  />
</div>

###

<h2 align="left">🚮Removing person data from Database using Postman</h2>

###

<p align="left">***DELETE REQUEST [https://stage-two-backend.onrender.com/user/api/:user_id]*** if the user id is passed as a parameter, the document that has that id will be removed from the database.</p>
<p align="left">***DELETE REQUEST [https://stage-two-backend.onrender.com/user/api/:user_id/?name=Mark Essien]*** Removes the documents whose name field matches the query parameter.</p>

###

<div align="center">
  <img height="300" src="https://i.ibb.co/fNzwyjP/delete-Person.png"  />
</div>

###


<h2 align="left">🔶UML Class Diagram</h2>

###

<div align="center">
  <img height="200" src="https://i.ibb.co/55NXhWL/Untitled-Diagram-drawio.png"  />
</div>

###

<h2 align="left">🔶ER Diagram</h2>

###

<div align="center">
  <img height="200" src="https://i.ibb.co/gtYnSJp/Entity-Relationship-Diagram-drawio.png"  />
</div>

###

<h2 align="left">🚀developed with</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" alt="mongodb logo"  />
</div>

###

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, make sure you have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed on your system.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/Gospel-c/stage-two-backend

# Access
$ cd stage-two-backend

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:3000>
```

## :video_game: Scripts

- `start`: starts the application at `localhost:3000`;
