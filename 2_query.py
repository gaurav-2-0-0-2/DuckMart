import duckdb

con = duckdb.connect(database='my-db.duckdb')

con.execute("CREATE TABLE query_cal AS SELECT user_id FROM '~/Downloads/user_events_tr.csv' WHERE user_id IN (SELECT user_id FROM '~/Downloads/user_attributes_tr.csv' WHERE location='California') LIMIT 10;")

con.table('query_cal').show() 
