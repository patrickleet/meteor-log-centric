#Gravity Example

## Set Up

Gravity is meant to be used with a MongoDB Replica Set with oplog tailing.

### Prerequisites 

Install MongoDb on your computer

### Setting up MongoDb with Replica Set

Open two terminal windows. 
In the first window run:

    make mongod

In the second window run:

  mongo
  > var config = {_id: "meteor", members: [{_id: 0, host: "127.0.0.1:27017"}]}
  > rs.initiate(config)

## Running Example

Open a terminal window
Run the following command:

    make mongod
