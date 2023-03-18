import duckdb 

con = duckdb.connect(database="my-db.duckdb")

con.execute("CREATE TABLE user_table AS SELECT * FROM 'user_attributes_tr.csv';")

con.execute("CREATE TABLE event_table AS SELECT * FROM 'user_events_tr.csv';")






