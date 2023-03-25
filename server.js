import express from "express";
import duckdb from "duckdb";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const db = new duckdb.Database('my-db.duckdb');
app.post('/segment', (req,res)=>{
    //   console.log(req.body);  
    const data = req.body;

    // array of user attributes to loop through and check what the consumer have specified in JSON
    const fields = ["user_id", "first_name", "last_name", "age", "gender", "location", "signUpDate", "subscriptionPlan", "deviceType"]
    // const operators = ["between", "in"]
    var userQuery = ` Select ${fields.filter((field)=>{ if(data.criteria.field === field){
        return field;
    }})} from ${data.criteria.table}`


    if(data.criteria.condition.operator === "between"){
      userQuery += ` where ${data.criteria.condition.parameter} ${data.criteria.condition.operator} ${data.criteria.condition.min} 
      ${data.criteria.condition.conjunction} ${data.criteria.condition.max};`
    }
    else if (data.criteria.join.type === "join"){
        userQuery += ` ${data.criteria.join.user_alias} ${data.criteria.join.type} 
        ${data.criteria.join.joining_table} ${data.criteria.join.event_alias} 
        on ${data.criteria.join.user_alias}.${data.criteria.join.joining_key} = 
        ${data.criteria.join.event_alias}.${data.criteria.join.joining_key} where 
        ${data.criteria.join.user_alias}.${data.criteria.join.parameter1} = ${data.criteria.join.value1}
        ${data.criteria.join.conjunction} 
        ${data.criteria.join.event_alias}.${data.criteria.join.parameter2} = ${data.criteria.join.value2};`
    }
    else{
      userQuery += ` = ${data.criteria.condition.value}`
    }

    // const userQuery = `Select ${data.fields}`
    
    // console.log(userQuery);
        db.all(userQuery, (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log(res);
        }

    })
})

app.listen(3000, () => {
    console.log("Server is Listening at port 3000");
})

