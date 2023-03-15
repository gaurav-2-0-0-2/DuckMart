import duckdb

con = duckdb.connect(database="my-db.duckdb")


con.execute("CREATE TABLE query_age AS SELECT user_id FROM '~/Downloads/user_attributes_tr.csv' WHERE age > 25 and age < 34;")

con.table('query_age').show()

 

