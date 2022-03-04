1. Design the database model to solve the hotel system, it can be No SQL or SQL relation. 
I desided to use an SQL database, because in that way I can relationate every entity without making so long tables, and just do the necesary queries on every call.

2. Briefly explain the functionality of your model, highlight important situations such as: reservation control, data security, 
fault tolerance, replication, etc. 

I decide to start with hard entities, that I know that are necesary to make the place work, as client, room and employees. Some of these tables has its types: There is a list of room and each room have a type: simple, doble or suit, there are many employees, and every employ has its position, receptionist, general, etc.

The clients pass to be a table, but there is another table with its financial data, as its credit cards.

There is a table that has the register of every reservation called in that way, that has client, room, and receptionist.

3.  Think  about  scenarios  in  case  the  system  collapses  and  how  to  create  a  temporal  solution,  for  example:  database 
corruption, an error not considered, customers with the same first and last name, etc. 

In case a new client wants to do a reservation and there is not electricity, the receptionist have to write client data in a paper. And check the vault of keys to give him a room. After, when the light comes back, the receptionist have to update the data and specify the date with hour in the form.

In case two or more clients have the same name, there is an input that is necessary that is called id_code, and id_name, that makes referenece to the official identification to recognize to the client

4. Implement your model in the selected database manager, specify the reason why you decided to use this database. In 
this point, you must convert your visual model  (diagram) to a physical model (create collections in MongoDb or create 
tables in SQL). 


5.  Create  at  least  5  endpoints  to  display/update/delete  some  data  of  your  model,  validate  the  data  entry  and  clearly 
indicate the error message in case of occurrence. 
