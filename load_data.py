import duckdb 

con = duckdb.connect(database=":memory:")

con.execute("""COPY(SELECT * FROM '~/Downloads/user_attributes_tr.csv') 
    TO '~/Downloads/output_user_attributes.csv' 
    """)

#con.table('user_attributes').show()
