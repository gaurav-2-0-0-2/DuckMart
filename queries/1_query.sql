SELECT user_id 
FROM  user_table   -- contains the main user data
WHERE age BETWEEN 25 AND 34;

 
 -- for running this file install duckdb CLI and run this command:
--  ./duckdb --init init.sql my-db.duckdb < queries/1_query.sql

