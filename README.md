# How to run
[https://github.com/adranuz/hotel-mariana](https://github.com/adranuz/hotel-mariana)

### Run API

1. Clone the project in your favorite location
    
    Open a terminal and move to the place you’ll use to storage the project and then clone the repository.
    
    ```bash
    ### if you dont have SSH keys
    $ git clone https://github.com/adranuz/hotel-mariana.git hotel
    ### if you have SSH key
    $ git clone git@github.com:adranuz/hotel-mariana.git hotel
    
    ### move the folder's project
    $ cd hotel/api
    
    ### install all the dependencies
    $ npm i
    ```
    
2. Start and set your database 
    
    ```bash
    ### if you need to turn on your postgres database
    $ sudo service postgresql start
    
    ### if you dont have the database name
    $ sudo -u postgres psql # for ubuntu
    $ psql -U postgres # for windows
    $ CREATE DATABASE hotel;
    $ \q
    ```
    
3. Set your environment’s variables
    
    ```bash
    ### copy the file in "api/.env.example" and paste it in the same place, but change the name to ".env"
    ### change your varables for your own configuration, then save it
    DB_HOST=localhost
    DB_NAME=hotel
    DB_USER=postgres
    DB_PASS=admin
    DB_PORT=5432
    
    API_PORT=3001
    ```
    
4. Start your server
    
    ```bash
    ### Start your api rest servers
    $ npm start
    ```
    
5. If everything is ok, run the migrations
    
    ```bash
    # npx sequelize-cli db:migrate
    # npx sequelize-cli db:seed:all
    ```
    
6. Do a couple of request to see if it is working, there are some files in the folder `api/requests` , ready to use in VS code’s extension REST Client

### Run Client

1. From the root move to client
2. Install dependencies and run start
    
    ```bash
    npm i
    npm start
    ```