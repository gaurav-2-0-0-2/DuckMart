select distinct a."user_id" 

from user_table a -- a is an alias for user_table

join event_table e -- e is an alias for event_table

on a."user_id" = e."user_id" -- taking user_id(s) from both tables

where a.location='California' 

and e."event_name"='LOGIN';

-- for running this file install duckdb CLI and run this command:
--  ./duckdb --init init.sql my-db.duckdb < queries/2_query.sql

