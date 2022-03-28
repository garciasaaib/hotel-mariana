### Functional Requirements

1. Clients can see the room’s data, as roof (1 to 4), pictures (10 for each), kind (simple, junior, or suite), price, if it is available.
2. Every room reservation has to add the IVA cost of 16%.
3. If a room is paid with other currency than Mexican pesos, it will have a 10% in discount.
4. The system will have a way to manage their reservations and all the costs that every client is generating through its residence.
5. Clients can book reservations by themselves in the Web.
6. Client’s data must have names, last names, password, email, phone number, pin code to authorize purchases & payment register to be fulfiled.
7. Every try to make a reservation must send an email with the note if the reservation has booked successfully, or it hasn’t.
8. When clients arrives to the hotel and have all the requirements, the keys and the information for reservation has given to them.
9. If client’s data is not complete, client must go with a receptionist to help him to finish it.
10. The client has the option to book a range of days and pay at that moment, or  set an indefinite range of days and pay when the stance ends.
11. Employees can visualize rooms and its data, and if it has been taken or left by the client.
12. If there are anomalies declared by the client, the receptionist must create a ticket and try to solve by other employees from the hotel. Changes in rooms can happen, if there is a real reason, and it's a hotel’s fault it won't have any extra cost, in the other way it’ll have.
13. 3 receptionists accounts needed to manage client’s reservations.
14. Extra service’s list will content laundry, food, change of room, etc.
15. Every extra service must be authorized by name and nip of the client. It can be paid at the moment is requested or at the end of the reservation.
16. When a reservation debt is paid, an email must be sent next day with the bill and all information of costs of rooms and services. As well, another email must be sent with a survey.
17. If the survey has answered, that client will have a 10% discount in their next room reservation.

### Non-Functional Requirements

1. Client’s RFC can be added for the declaration of the bill. Only for mexican bill references.
2. There will be a super employee that can admin other employees and can do reservations, but it won't be their main task.
3. There were levels for the clients, in that way a different survey will be sent to response. 
    
    ```markdown
    first reservation          => client level 0
    1 to 3 reservations booked => client level 1
    4 or more reservations     => client level 2
    ```
    
4. Pays need date and hour when it gets done.
5. Client’s financial info is saved in DB, but not passwords.
6. Payments will be settled with a payment system as PayPal.
7. Employees can be clients
8. To identify every client, we need to set a pin to authorize ever service and room booking.
9. Rooms can be filled by other people than the main client, but we always need to know in which room is the client.

### System collapses

We also add a table with all the movements, to register everything that happen along the day called binnacle that will be used to visualize the hole moves during the day. At the same way, we need to call.

In the case the client wanted to cancel a reservation, the employee in charge can take that order and try to do it, the condition is the stating date is minimum a day to start. In other way, we can’t cancel it, but we can change the days in the same year. 

The case system or part of it collapses, receptionist always write by hand in a paper the things that happen along the day in a binnacle in paper and in the system, the idea is register what is not possible to register in the system and when system comes again do it

### Block Diagram

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba8cef40-9629-4889-a5ce-931de041094c/Untitled.png)

### Accessibility

Taking the fact that the company only have 1 build and is not so fluent in resources, we propose only use the web interface to manage the API, because web is multiplatform and low cost.

It depends on your kind of user the permissions you will have.

- Guest
- Client
- Employee
- Admin

### Database Selection

It got decided to use an SQL database, because in that way we can relate every entity without making so long tables, and just do the necessary queries on every call. Other reason is the security, clients, employees and financial is dedicated data, so we need a strong security.

The proposal is using 2 databases:

1. Data that the client needs to make a reservation, with nothing of so hot data.
2. Internal data from the hotel, like client’s financial data, employees data & the other data that is linked to reservations.

### BD explanation

We have hard entities that would be things that really  exists, and it would be:

- Rooms (100 of them)
- Clients (all the people that make a reservation)
- Employees (can be receptionist, manager, etc)
- List of services (can be food, drinks, change to another room)
- Quizzes (surveys) (lists of questions)

With those entities, you can create another relational entities like

- Reservations (have the hole information of the event reservation)
- Bills (bill will be created at finishing the reservation)
- Answered quizzes (1 per reservation)
- Tickets (calls or things that we need to put attention and resolve)

### Main endpoints

These are some endpoints that we are going to use to make the system work.

```markdown
### Can show the status in hole rooms, edith the status of when it needs to be not avaiable.
http://localhost:3001/api/v1/rooms

### Create, add personal and financial info & validate client, check if have a discount.
http://localhost:3001/api/v1/clients

### Create new employes, update employee's position, quit an employee, show all the reservations that have registered.
http://localhost:3001/api/v1/employees

###  Create new reservations, see details of the reservation, see the services that the client took, check every debt from the reservation, cancel reservation if the client wants to do it and it isnt the starting date.
http://localhost:3001/api/v1/reservation

###  Create a new type of survey with different questions, show and count most common answers, get lists of mos answered questions and surveys.
http://localhost:3001/api/v1/surveys
```

The company compromises itself to create this product in time and features.