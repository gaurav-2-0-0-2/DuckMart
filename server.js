// import express from "express";
// import duckdb from "duckdb";
// const app = express();
// const db = new duckdb.Database('my-db.duckdb');
// app.post("/segment", (req, res) => {
//     const data = req.body;
//     const userSql = ` SELECT * FROM ${data.table} WHERE ${data.age} BETWEEN 25 AND 34`;
//     db.all(userSql, (err, res) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log(res);
//         }

//     })
// });
// app.listen(3000, () => {
//     console.log("Server is Listening at port 3000");
// })


import express from "express";
import duckdb from "duckdb";
const app = express();

const db = new duckdb.Database('my-db.duckdb');


app.post('/segment', (req,res)=>{
    const data = req.body;

    


    

})




































































/* This code is just for reference */
// import express from 'express';
// import duckdb from 'duckdb';

// const app = express();
// // const port = 3000;

// // Define the route for the API endpoint
// app.post('/segment', (req, res) => {
//   // Parse the JSON data from the request body
//   const criteria = req.body;

//   // Build the SQL query for selecting user data based on the given criteria
//   const userSql = `
//     SELECT *
//     FROM user_table
//     WHERE 
//       id = ${criteria.id} AND
//       name = '${criteria.name}' AND
//       age >= ${criteria.minAge} AND
//       age <= ${criteria.maxAge} AND
//       gender = '${criteria.gender}' AND
//       location = '${criteria.location}' AND
//       signup_date >= '${criteria.minSignupDate}' AND
//       signup_date <= '${criteria.maxSignupDate}' AND
//       subscription_plan = '${criteria.subscriptionPlan}' AND
//       device_type = '${criteria.deviceType}'`;

//   // Build the SQL query for selecting user event data based on the given criteria
//   const eventSql = `
//     SELECT *
//     FROM event_table
//     WHERE 
//       id = ${criteria.id} AND
//       event_name = '${criteria.eventName}' AND
//       timestamp >= '${criteria.minTimestamp}' AND
//       timestamp <= '${criteria.maxTimestamp}'`;

//   // Connect to the DuckDB database
//   const conn = new duckdb.DatabaseConnection();
//   conn.connect('my-db.duckdb', (err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error connecting to database');
//       return;
//     }

//     // Execute the SQL queries and send the results as JSON
//     conn.all(userSql, (err, users) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error executing user query');
//         return;
//       }

//       conn.all(eventSql, (err, events) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send('Error executing event query');
//           return;
//         }

//         const result = { users, events };
//         res.json(result);
//       });
//     });
//   });
// });

// app.listen(3000, () => {
//   console.log(`Example app listening at 3000`);
// });
