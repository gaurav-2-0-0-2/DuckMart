# Instructions about the project
### For running the project locally follow these steps:
1. Install [NodeJs](https://nodejs.org/en/download)
2. Open the terminal and **Clone** this repository by running:<br/>
`git clone git@github.com:HousewareHQ/houseware---data-engineering-octernship-gaurav-2-0-0-2.git`
3. After cloning go to the project folder and run:<br/>
`npm install`
4. Now for running the project locally run:<br/>
`node server.js`

### For testing the queries:
1. Install [duckdb CLI](https://duckdb.org/docs/api/cli.html)
2. Unzip the folder in the same directory  as of the project.
3. In order to run the queries to show the result in terminal run:<br/>
`./duckdb --init init.sql my-db.duckdb < queries/<query_name>.sql`

### For testing the API endpoint
1. Download [Postman](https://www.postman.com/downloads/)
2. Open postman and change the following:<br/>
i. HTTP request to POST request. <br/>
ii. Enter `http://localhost:3000/segment` in the input box.<br/>
iii. Select Body --> raw and set JSON data.<br/>
iv. Put the JSON file's data (from the project) in the POST request body.<br/>
v. Make sure that your project is running locally.<br/>
vi. Click send button to post your JSON data and you can change the JSON data according to your need.<br/>
The specs for JSON file are:
```
{
"criteria":{
"field":  "user_id",
"table":  "user_table",
"condition":{
"parameter":  "age",
"value":  "30",
"operator":  "between",
"conjunction":  "and",
"min":  "25",
"max":  "34"
},
"join":{
"type":  "join",
"user_alias":  "a",
"event_alias":  "e",
"joining_table":  "event_table",
"joining_key":  "user_id",
"conjunction":  "and",
"parameter1":  "location",
"value1":"'California'",
"parameter2":  "event_name",
"value2":  "'LOGIN'"
  }
 }
}
```  
You will be able to see the results in the console or terminal.<br/>
*This is just an example you can modify the JSON as you need.*<br/>
