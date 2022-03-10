# Hotel Posada Real

1. Database Selection 
  I desided to use an SQL database, because in that way I can relationate every entity without making so long tables, and just do the necesary queries on every call.

2. Accesibility 
  Taking the fact that the company only have 1 build and is not so fluent in resouces, we propose only use the web interface to manage the api, because web is multiplataform.
  It depends of your kind of user the permissions you will have.
    - Guest
    - Client
    - Employee
    - Admin
  
3. BD explanation
  We have hard entities that would be things that really  exists, and it would be:
    - Rooms (100 of them)
    - Clients (all the people that make a reservation)
    - Employees (can be receptionist, gerent)
    - List of services (can be food, drinks, change to another room)
    - Quizzes (surveys) (lists of questions)

  With those entities you can create another relationated   entities like
    - Reservations 
    - Bills
    - Answered quizzes
    - Tickets

  We also add a table with all the movements, to register everything that happend along the day called binnacle that will be used to visualizate the hole moves during the day.

  ### Clients 
  Client is a type of user, that have some funcionalities, to make a reservation in our hotel we need to take the personal data as names, lastnames, identification name & number
  

1. Briefly explain the functionality of your model, highlight important situations such as: reservation control, data security, fault tolerance, replication, etc. fecha y hora y la firma del cliente.  
   
I decide to start with hard entities, that I know that are necesary to make the place work, as client, room and employees. Some of these tables has its types: There is a list of room and each room have a type: simple, doble or suit, there are many employees, and every employ has its position, receptionist, general, etc.

The clients pass to be a table, but there is another table with its financial data, as its credit cards.

There is a table that has the register of every reservation called in that way, that has client, room, and receptionist.

1.  Think  about  scenarios  in  case  the  system  collapses  and  how  to  create  a  temporal  solution,  for  example:  database 
corruption, an error not considered, customers with the same first and last name, etc. 

In case a new client wants to do a reservation and there is not electricity, the receptionist have to write client data in a paper. And check the vault of keys to give him a room. After, when the light comes back, the receptionist have to update the data and specify the date with hour in the form.

In case two or more clients have the same name, there is an input that is necessary that is called id_code, and id_name, that makes referenece to the official identification to recognize to the client

4. Implement your model in the selected database manager, specify the reason why you decided to use this database. In this point, you must convert your visual model  (diagram) to a physical model (create collections in MongoDb or create 
tables in SQL). 


5.  Create  at  least  5  endpoints  to  display/update/delete  some  data  of  your  model,  validate  the  data  entry  and  clearly 
indicate the error message in case of occurrence. 
